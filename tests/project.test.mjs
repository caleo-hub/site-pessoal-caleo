import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
const amplifySpec = await readFile("amplify.yml", "utf8");

test("project has the expected CI scripts", () => {
  assert.equal(packageJson.scripts.typecheck, "tsc --noEmit");
  assert.equal(packageJson.scripts.lint, "eslint .");
  assert.equal(packageJson.scripts.test, "node --test tests/*.test.mjs");
  assert.match(packageJson.scripts.ci, /npm run build/);
});

test("Amplify build spec runs a production Next.js build", () => {
  assert.match(amplifySpec, /npm ci/);
  assert.match(amplifySpec, /npm run build/);
  assert.match(amplifySpec, /baseDirectory: \.next/);
});
