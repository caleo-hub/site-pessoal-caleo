import { ProjectPreview } from "@/components/project-preview";
import { YearsInTech } from "@/components/years-in-tech";
import Image from "next/image";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://caleosantos.com/#person",
      name: "Caléo Meneses",
      url: "https://caleosantos.com/",
      image: "https://caleosantos.com/about/caleo-meneses.png",
      jobTitle: ["Machine Learning Specialist", "Agentic AI Engineer"],
      sameAs: [
        "https://www.linkedin.com/in/caleomeneses",
        "https://github.com/caleo-hub",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Federal da Bahia",
        },
        {
          "@type": "EducationalOrganization",
          name: "Instituto Federal da Bahia",
        },
      ],
      knowsAbout: [
        "Machine Learning",
        "Agentic AI",
        "Retrieval-Augmented Generation",
        "Model Context Protocol",
        "Cloud Computing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://caleosantos.com/#website",
      url: "https://caleosantos.com/",
      name: "Caléo Meneses",
      description:
        "Site profissional de Caléo Meneses sobre Machine Learning, Agentic AI e sistemas cloud-native.",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://caleosantos.com/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://caleosantos.com/#profilepage",
      url: "https://caleosantos.com/",
      name: "Caléo Meneses | Machine Learning & Agentic AI",
      description:
        "Perfil profissional, projetos e pesquisa de Caléo Meneses em Machine Learning e Agentic AI.",
      inLanguage: "pt-BR",
      isPartOf: { "@id": "https://caleosantos.com/#website" },
      mainEntity: { "@id": "https://caleosantos.com/#person" },
    },
  ],
};

const capabilities = [
  {
    number: "01",
    title: "Agentes e orquestração",
    description:
      "Sistemas agentivos confiáveis com LangGraph, memória, tool calling, human-in-the-loop e fluxos determinísticos."
  },
  {
    number: "02",
    title: "RAG e conhecimento",
    description:
      "Busca semântica, embeddings, citações e bases de conhecimento empresariais com AWS Bedrock e OpenSearch."
  },
  {
    number: "03",
    title: "MCP e integrações",
    description:
      "Camadas de integração seguras para conectar agentes a sistemas de negócio, APIs e dados corporativos."
  },
  {
    number: "04",
    title: "Cloud e produção",
    description:
      "Arquiteturas serverless e orientadas a eventos, com testes, CI/CD, observabilidade e infraestrutura como código."
  }
];

const projects = [
  {
    name: "Enterprise RAG Assistant",
    tag: "Conhecimento empresarial · Decisão",
    description:
      "Construo assistentes que organizam o conhecimento interno e ajudam equipes a encontrar respostas confiáveis para decidir e agir com mais rapidez.",
    href: "https://github.com/caleo-hub/enterprise-rag-assistant",
    videoKey: "enterprise-rag-assistant/demo.mp4"
  },
  {
    name: "Hybrid Service Desk Agent",
    tag: "Operações · Atendimento",
    description:
      "Desenvolvo agentes que tornam o atendimento mais consistente, reduzem o tempo de resposta e ajudam operações a encaminhar cada solicitação com mais clareza.",
    href: "https://github.com/caleo-hub/hybrid-service-desk-agent",
    videoKey: "hybrid-service-desk-agent/demo.mp4"
  },
  {
    name: "Voice Field Service Copilot",
    tag: "Operações de campo · Voz",
    description:
      "Crio copilotos de voz que apoiam equipes de campo, reduzem o trabalho administrativo e mantêm as informações certas disponíveis durante o atendimento.",
    href: "https://github.com/caleo-hub/voice-field-service-copilot",
    videoKey: "voice-field-service-copilot/demo.mp4",
    audioToggle: true
  },
  {
    name: "violence-detection-acoustic-scenes",
    tag: "Inteligência de áudio · TCC UFBA",
    description:
      "Pesquisa em inteligência de áudio e deep learning para reconhecer padrões complexos em cenas acústicas reais, na fronteira entre sinais, aprendizagem e percepção computacional.",
    href: "https://github.com/caleo-hub/violence-detection-acoustic-scenes",
    imageSrc: "/projects/violence-detection-acoustic-scenes.png"
  }
];

const portfolioVideoBaseUrl = process.env.NEXT_PUBLIC_PORTFOLIO_VIDEO_BASE_URL;

const experience = [
  {
    company: "DXC Technology",
    role: "Machine Learning Specialist",
    description:
      "Soluções empresariais de GenAI, RAG, NLP e agentes, integradas a conhecimento corporativo e sistemas operacionais."
  },
  {
    company: "Ford Motor Company",
    role: "Machine Learning Software Developer & Researcher",
    description:
      "Deep learning para eventos acústicos, analytics de veículos conectados e engenharia de software para dados em escala."
  },
  {
    company: "Universidade Federal da Bahia",
    role: "Machine Learning Researcher",
    description:
      "Pesquisa em inteligência de áudio, classificação de eventos acústicos e modelos baseados em redes neurais convolucionais."
  }
];

const stack = [
  "Python",
  "LangGraph",
  "AWS Bedrock",
  "MCP",
  "FastAPI",
  "PostgreSQL",
  "OpenSearch",
  "Docker",
  "Terraform",
  "Next.js"
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Caléo Meneses — início">
          CM<span>.</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#pesquisa">Pesquisa</a>
        </nav>
        <a className="header-contact" href="mailto:caleomenesessantos@gmail.com">
          Vamos conversar <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow"><span /> Machine Learning Specialist · Agentic AI Engineer</p>
          <h1>
            Construindo sistemas de IA que chegam à <em>produção.</em>
          </h1>
          <p className="hero__lead">
            Projeto agentes, sistemas RAG e plataformas de machine learning cloud-native que transformam processos complexos em soluções úteis, seguras e observáveis.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projetos">
              Conheça meu trabalho <ArrowIcon />
            </a>
            <a className="button button--ghost" href="https://github.com/caleo-hub" target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="hero__aside" aria-label="Resumo profissional">
          <div><YearsInTech /><span>anos em tecnologia e IA</span></div>
          <div><strong>2×</strong><span>AWS Certified</span></div>
          <div><strong>BR</strong><span>Salvador, Bahia</span></div>
        </div>
        <a className="scroll-cue" href="#sobre">Explore <span>↓</span></a>
      </section>

      <section className="section about" id="sobre">
        <div className="section-label">Sobre mim</div>
        <div className="about__content">
          <p className="statement">
            Sou especialista em Machine Learning e engenheiro de software. Trabalho na interseção entre <strong>IA aplicada, sistemas distribuídos e cloud.</strong>
          </p>
          <div className="about__copy">
            <p>
              Meu foco atual é desenhar sistemas agentivos confiáveis que combinam inteligência conversacional com workflows determinísticos, integrações empresariais, RAG e infraestrutura pronta para produção.
            </p>
            <p>
              Atuo em todo o ciclo: arquitetura, protótipos, desenvolvimento de agentes e APIs, processamento assíncrono, deploy, testes, monitoramento e melhoria contínua.
            </p>
          </div>
        </div>
      </section>

      <section className="section capabilities">
        <div className="section-heading">
          <div>
            <div className="section-label">O que eu faço</div>
            <h2>Da ideia ao sistema confiável.</h2>
          </div>
          <p>Engenharia pragmática para produtos inteligentes que precisam funcionar no mundo real.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projetos">
        <div className="section-heading">
          <div>
            <div className="section-label">Projetos selecionados</div>
            <h2>Produtos, agentes e pesquisa em código.</h2>
          </div>
          <a className="text-link" href="https://github.com/caleo-hub?tab=repositories" target="_blank" rel="noreferrer">
            Ver todos no GitHub <ArrowIcon />
          </a>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <a className={`project-card${project.videoKey || project.imageSrc ? " project-card-with-preview" : ""}`} href={project.href} target="_blank" rel="noreferrer" key={project.name}>
              <span className="project-index">0{index + 1}</span>
              <div>
                <p className="project-tag">{project.tag}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-arrow"><ArrowIcon /></span>
              {project.videoKey || project.imageSrc ? (
                <ProjectPreview
                  imageSrc={project.imageSrc}
                  src={project.videoKey && portfolioVideoBaseUrl ? `${portfolioVideoBaseUrl}/${project.videoKey}` : undefined}
                  audioToggle={project.audioToggle}
                  title={project.name}
                />
              ) : null}
            </a>
          ))}
        </div>
      </section>

      <section className="research" id="pesquisa">
        <div className="research__visual" aria-hidden="true">
          <span className="orbit orbit--one" />
          <span className="orbit orbit--two" />
          <span className="research__core">LLM</span>
          <span className="node node--one">TF-IDF</span>
          <span className="node node--two">UMAP</span>
          <span className="node node--three">HDBSCAN</span>
        </div>
        <div className="research__content">
          <div className="section-label section-label--light">Pesquisa atual · MBA USP/Esalq</div>
          <h2>Quando LLMs ajudam a descobrir estrutura em dados não estruturados.</h2>
          <p>
            No MBA em Data Science, investigo como modelos de linguagem podem ampliar a análise de dados não estruturados e gerar conhecimento útil para operações complexas.
          </p>
          <div className="research__metrics">
            <span>Embeddings</span><span>Topic Modeling</span><span>Clustering</span><span>Explainable AI</span>
          </div>
          <p className="research__previous">
            Pesquisa anterior na UFBA: meu TCC em Engenharia Elétrica sobre detecção de violência em cenas acústicas com deep learning. {" "}
            <a href="https://github.com/caleo-hub/violence-detection-acoustic-scenes" target="_blank" rel="noreferrer">
              Ver projeto <ArrowIcon />
            </a>
          </p>
        </div>
      </section>

      <section className="section experience">
        <div className="section-label">Experiência</div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.company}>
              <div><h3>{item.company}</h3><p>{item.role}</p></div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack" aria-label="Tecnologias">
        <p>Stack principal</p>
        <div>{stack.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="personal-note" id="sobre-mim">
        <div className="personal-note__portrait">
          <Image
            src="/about/caleo-meneses.png"
            alt="Caléo Meneses"
            width={400}
            height={400}
          />
        </div>
        <div className="personal-note__content">
          <div className="section-label">Além da tecnologia</div>
          <h2>Curiosidade também é uma forma de engenharia.</h2>
          <p>
            Sou fascinado por tecnologia, inteligência artificial e pelas perguntas que a ciência ainda não respondeu. Cresci entre ficção científica, histórias sobre espaço e viagem no tempo, ciência e paradoxos — ideias que misturam imaginação, rigor e a vontade de explorar o desconhecido.
          </p>
          <p>
            Foi essa combinação que me trouxe para a IA: transformar curiosidade em sistemas que aprendem, conectam conhecimento e ajudam pessoas a tomar decisões melhores.
          </p>
          <p className="personal-note__formation">
            Sou Engenheiro Eletricista formado pela UFBA, Técnico em Automação Industrial formado pelo IFBA e atualmente faço MBA em Data Science na USP/Esalq.
          </p>
        </div>
      </section>

      <section className="contact" id="contato">
        <p className="eyebrow"><span /> Disponível para conexões e boas conversas</p>
        <h2>Vamos construir algo que <em>importe.</em></h2>
        <a href="mailto:caleomenesessantos@gmail.com">caleomenesessantos@gmail.com <ArrowIcon /></a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Caléo Meneses</p>
        <div>
          <a href="https://www.linkedin.com/in/caleomeneses" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/caleo-hub" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
      </main>
    </>
  );
}








