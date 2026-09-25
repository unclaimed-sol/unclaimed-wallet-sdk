/** Reference application orchestration. The SDK only calls build/record.
 * Signing and submission are explicit integration-owned callbacks. Retain the
 * journal before submission; an unknown response must never cause a rebuild.
 */
export async function executeReviewedBuild({
  client,
  wallet,
  items,
  session,
  buildKey,
  review,
  sign,
  submit,
  save,
}) {
  if (!session || !Array.isArray(items) || !items.length)
    throw new Error("Reviewable execution session required.");
  const build = await client.build(
    {
      wallet,
      items: items.map(({ id, opportunity }) => ({
        id,
        action: opportunity.action,
      })),
    },
    session.token,
    { idempotencyKey: buildKey },
  );
  if (!build.executionReceipt) return { build, record: null };
  // Show the refreshed consent, per-item amounts, network fee and funding first.
  const accepted = await review(build);
  const journal = {
    wallet,
    buildKey,
    receipt: build.executionReceipt.token,
    transactions: [],
  };
  await save(journal);
  for (const [index, tx] of build.transactions.entries()) {
    if (!accepted) {
      journal.transactions.push({ id: tx.id, status: "not_signed" });
      continue;
    }
    let signed;
    try {
      signed = await sign(tx);
    } catch {
      journal.transactions.push(
        ...build.transactions
          .slice(index)
          .map((t) => ({ id: t.id, status: "not_signed" })),
      );
      await save(journal);
      break;
    }
    if (
      !signed ||
      typeof signed.signature !== "string" ||
      typeof signed.signedTransaction !== "string"
    )
      throw new Error(
        "Integration signer did not provide submission evidence.",
      );
    // Persist exact bytes, derived signature and exact height before any submission.
    journal.transactions.push({
      id: tx.id,
      status: "submitted",
      signature: signed.signature,
      signedTransaction: signed.signedTransaction,
      lastValidBlockHeight: tx.lastValidBlockHeight,
      submission: "not_attempted",
    });
    await save(journal);
    const entry = journal.transactions.at(-1);
    entry.submission = "attempted";
    await save(journal);
    try {
      await submit(signed, tx);
      entry.submission = "acknowledged";
    } catch {
      entry.submission = "unknown";
    }
    await save(journal);
    if (entry.submission === "unknown") break;
  }
  await save(journal);
  const record = await client.recordExecution(
    {
      wallet,
      transactions: journal.transactions.map(({ id, status, signature }) => ({
        id,
        status,
        ...(signature ? { signature } : {}),
      })),
    },
    journal.receipt,
  );
  journal.record = record;
  await save(journal);
  return { build, record };
}
