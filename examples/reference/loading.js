// Progressive same-origin form submission; CSRF and keys remain server-owned.
let submitting = false;
const status = document.querySelector('[role="status"]');
document.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (submitting) return;
  const body = new URLSearchParams(new FormData(event.target));
  submitting = true;
  document.querySelector("main").setAttribute("aria-busy", "true");
  status.textContent = "Loading analysis. Keep this page open; no automatic retries.";
  for (const button of document.querySelectorAll("button:not(:disabled)")) {
    button.dataset.loadingDisabled = "true";
    button.disabled = true;
  }
  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      credentials: "same-origin",
    });
    if (!response.ok) throw Error("Form request unavailable");
    // Read retained server state, never resubmit the form on reload.
    window.location.reload();
  } catch {
    status.textContent = "Response unavailable. Reload to check the retained attempt before doing anything else.";
    // A browser transport error cannot establish whether the server accepted it.
    // Keep controls blocked until a read-only reload reconciles server state.
  }
});
// Back/forward cache must not leave a restored form disabled.
window.addEventListener("pageshow", () => {
  if (!submitting) return;
  submitting = false;
  document.querySelector("main").removeAttribute("aria-busy");
  status.textContent = "";
  for (const button of document.querySelectorAll("[data-loading-disabled]")) {
    button.disabled = false;
    delete button.dataset.loadingDisabled;
  }
});
