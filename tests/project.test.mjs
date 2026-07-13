import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
const amplifySpec = await readFile("amplify.yml", "utf8");
const homePage = await readFile("src/app/page.tsx", "utf8");
const workflow = await readFile(".github/workflows/ci-cd.yml", "utf8");
const setupScript = await readFile("scripts/setup-amplify-cicd.sh", "utf8");

test("project has the expected CI scripts", () => {
  assert.equal(packageJson.scripts.typecheck, "tsc --noEmit");
  assert.equal(packageJson.scripts.lint, "eslint .");
  assert.equal(packageJson.scripts.test, "node --test tests/*.test.mjs");
  assert.match(packageJson.scripts.ci, /npm run build/);
});

test("home page contains the first portfolio iteration", () => {
  assert.match(homePage, /Caléo Meneses/);
  assert.match(homePage, /Machine Learning Specialist/);
  assert.match(homePage, /Projetos selecionados/);
  assert.match(homePage, /MBA USP\/Esalq/);
  assert.match(homePage, /caleomenesessantos@gmail\.com/);
});

test("deployment runs once and is skipped before bootstrap", () => {
  assert.match(workflow, /vars\.AMPLIFY_APP_ID != ''/);
  assert.doesNotMatch(setupScript, /--enable-auto-build/);
  assert.match(setupScript, /--no-enable-auto-build/);
});

test("Amplify build spec runs a production Next.js build", () => {
  assert.match(amplifySpec, /npm ci/);
  assert.match(amplifySpec, /npm run build/);
  assert.match(amplifySpec, /baseDirectory: \.next/);
});
