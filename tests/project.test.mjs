import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
const amplifySpec = await readFile("amplify.yml", "utf8");
const homePage = await readFile("src/app/page.tsx", "utf8");
const workflow = await readFile(".github/workflows/ci-cd.yml", "utf8");
const hostingStack = await readFile("infra/lib/hosting-stack.ts", "utf8");

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
  assert.match(homePage, /Enterprise RAG Assistant/);
  assert.match(homePage, /Hybrid Service Desk Agent/);
  assert.match(homePage, /Voice Field Service Copilot/);
  assert.match(homePage, /Conhecimento empresarial/);
  assert.match(homePage, /reduzem o tempo de resposta/);
  assert.match(homePage, /Operações de campo/);
  assert.match(homePage, /inteligência de áudio/);
  assert.match(homePage, /LLMs ajudam a descobrir estrutura/);
  assert.match(homePage, /enterprise-rag-assistant\/demo\.mp4/);
  assert.match(homePage, /hybrid-service-desk-agent\/demo\.mp4/);
  assert.match(homePage, /voice-field-service-copilot\/demo\.mp4/);
  assert.match(homePage, /audioToggle: true/);
  assert.match(homePage, /project-card-with-preview/);
  assert.match(homePage, /violence-detection-acoustic-scenes\.png/);
  assert.match(homePage, /MBA USP\/Esalq/);
  assert.match(homePage, /TCC UFBA/);
  assert.match(homePage, /Pesquisa anterior na UFBA/);
  assert.match(homePage, /caleomenesessantos@gmail\.com/);
});

test("deployment runs once and is skipped before bootstrap", () => {
  assert.match(workflow, /vars\.AMPLIFY_APP_ID != ''/);
  assert.match(hostingStack, /enableAutoBuild: false/);
  assert.match(hostingStack, /PortfolioVideoBucket/);
  assert.match(hostingStack, /NEXT_PUBLIC_PORTFOLIO_VIDEO_BASE_URL/);
  assert.match(hostingStack, /portfolio\/\*/);
  assert.match(hostingStack, /versioned: true/);
  assert.match(hostingStack, /OpenIdConnectProvider/);
  assert.match(hostingStack, /noEcho: true/);
});

test("existe fallback para vídeos ainda não enviados", async () => {
  const preview = await readFile(
    new URL("../src/components/project-preview.tsx", import.meta.url),
    "utf8"
  );

  assert.match(preview, /Vídeo em gravação/);
  assert.match(preview, /onError/);
  assert.match(preview, /Ative o áudio/);
  assert.match(preview, /muted=\{!audioEnabled\}/);
});

test("existe a imagem de pesquisa do TCC no site", async () => {
  const image = await readFile(
    new URL("../public/projects/violence-detection-acoustic-scenes.png", import.meta.url)
  );

  assert.ok(image.length > 100000);
});

test("calcula automaticamente os anos desde 2019", async () => {
  const years = await readFile(
    new URL("../src/components/years-in-tech.tsx", import.meta.url),
    "utf8"
  );

  assert.match(years, /getFullYear\(\) - CAREER_START_YEAR/);
  assert.match(years, /CAREER_START_YEAR = 2019/);
});

test("existe o quadro pessoal próximo ao contato", async () => {
  assert.match(homePage, /Curiosidade também é uma forma de engenharia/);
  assert.match(homePage, /Engenheiro Eletricista formado pela UFBA/);
  assert.match(homePage, /MBA em Data Science na USP\/Esalq/);

  const portrait = await readFile(
    new URL("../public/about/caleo-meneses.png", import.meta.url)
  );

  assert.ok(portrait.length > 100000);
});

test("Amplify build spec runs a production Next.js build", () => {
  assert.match(amplifySpec, /npm ci/);
  assert.match(amplifySpec, /npm run build/);
  assert.match(amplifySpec, /baseDirectory: \.next/);
});








