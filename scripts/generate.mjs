import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import openapiTS, { astToString } from "openapi-typescript";
import { parse } from "yaml";
const require = createRequire(import.meta.url);
const Ajv = require("ajv/dist/2020");
const standalone = require("ajv/dist/standalone").default;
const root = new URL("../", import.meta.url);
const source = await readFile(new URL("openapi/analysis.yaml", root), "utf8");
const spec = parse(source);
if (Object.keys(spec.paths).sort().join() !== '/build,/check-wallet,/executions/record') throw Error('Unexpected mounted operations.');
const hash = createHash("sha256").update(source).digest("hex");
const banner = `// Generated from openapi/analysis.yaml (SHA-256 ${hash}). Do not edit.\n`;
const ajv = new Ajv({
  strict: false,
  code: { source: true, esm: true },
  allErrors: false,
});
require("ajv-formats")(ajv, { mode: "fast" });
// Standalone validation preserves JSON Schema conditionals that TypeScript cannot express.
for (const name of [
  "CheckWalletRequest",
  "CheckWalletResponse",
  "ErrorEnvelope",
  "BuildRequest", "BuildResponse", "RecordRequest", "RecordResponse",
]) {
  ajv.addSchema({
    $id: name,
    $ref: `#/components/schemas/${name}`,
    components: spec.components,
  });
}
// Request schema is not used to preempt server refusals; export for fixture verification.
const validators = standalone(ajv, {
  validateRequest: "CheckWalletRequest",
  validateResponse: "CheckWalletResponse",
  validateError: "ErrorEnvelope",
  validateBuild: "BuildResponse",
  validateRecord: "RecordResponse",
});
// Bundle AJV's generated helpers; the SDK has no runtime dependencies.
const { build } = await import("esbuild");
const bundled = await build({
  stdin: {
    contents: validators,
    resolveDir: process.cwd(),
    sourcefile: "validate.js",
    loader: "js",
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "neutral",
  target: "es2022",
});
const formatCode = bundled.outputFiles[0].text;
const outputs = new Map([
  [
    "src/generated/analysis.ts",
    banner + astToString(await openapiTS(spec, { defaultNonNullable: false })),
  ],
  ["src/generated/validate.js", banner + formatCode],
]);
for (const [path, contents] of outputs) {
  if (process.argv.includes("--check")) {
    if (
      (await readFile(new URL(path, root), "utf8").catch(() => null)) !==
      contents
    )
      throw Error(`Stale generated output: ${path}`);
  } else await writeFile(new URL(path, root), contents);
}
console.log(
  `Mounted types and runtime validators ${process.argv.includes("--check") ? "verified" : "generated"} (${hash}).`,
);
