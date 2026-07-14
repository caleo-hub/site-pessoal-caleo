import { ProjectPreview } from "@/components/project-preview";
import { YearsInTech } from "@/components/years-in-tech";
import { LanguageSwitcher } from "@/components/language-switcher";
import Image from "next/image";

type Locale = "pt" | "en";

function getJsonLd(locale: Locale) {
  const isEnglish = locale === "en";
  const url = isEnglish
    ? "https://caleosantos.com/en"
    : "https://caleosantos.com/";

  return {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://caleosantos.com/#person",
      name: "Caléo Meneses",
      url,
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
        isEnglish
          ? "Caléo Meneses' professional site about Machine Learning, Agentic AI, and cloud-native systems."
          : "Site profissional de Caléo Meneses sobre Machine Learning, Agentic AI e sistemas cloud-native.",
      inLanguage: isEnglish ? "en" : "pt-BR",
      publisher: { "@id": "https://caleosantos.com/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://caleosantos.com/#profilepage",
      url,
      name: "Caléo Meneses | Machine Learning & Agentic AI",
      description:
        isEnglish
          ? "Professional profile, projects, and research by Caléo Meneses in Machine Learning and Agentic AI."
          : "Perfil profissional, projetos e pesquisa de Caléo Meneses em Machine Learning e Agentic AI.",
      inLanguage: isEnglish ? "en" : "pt-BR",
      isPartOf: { "@id": "https://caleosantos.com/#website" },
      mainEntity: { "@id": "https://caleosantos.com/#person" },
    },
  ],
  };
}

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

const capabilitiesEn = [
  {
    number: "01",
    title: "Agents and orchestration",
    description:
      "Reliable agentic systems with LangGraph, memory, tool calling, human-in-the-loop, and deterministic workflows.",
  },
  {
    number: "02",
    title: "RAG and knowledge",
    description:
      "Semantic search, embeddings, citations, and enterprise knowledge bases with AWS Bedrock and OpenSearch.",
  },
  {
    number: "03",
    title: "MCP and integrations",
    description:
      "Secure integration layers connecting agents to business systems, APIs, and corporate data.",
  },
  {
    number: "04",
    title: "Cloud and production",
    description:
      "Serverless and event-driven architectures with testing, CI/CD, observability, and infrastructure as code.",
  },
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

const projectsEn = [
  {
    ...projects[0],
    tag: "Enterprise knowledge · Decision-making",
    description:
      "I build assistants that organize internal knowledge and help teams find reliable answers to make decisions and act faster.",
  },
  {
    ...projects[1],
    tag: "Operations · Service desk",
    description:
      "I develop agents that make support more consistent, shorten response times, and help operations route every request with greater clarity.",
  },
  {
    ...projects[2],
    tag: "Field operations · Voice",
    description:
      "I create voice copilots that support field teams, reduce administrative work, and keep the right information available during service delivery.",
  },
  {
    ...projects[3],
    tag: "Audio intelligence · UFBA thesis",
    description:
      "Research in audio intelligence and deep learning to recognize complex patterns in real acoustic scenes, at the intersection of signals, learning, and computational perception.",
  },
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

const experienceEn = [
  {
    ...experience[0],
    description:
      "Enterprise GenAI, RAG, NLP, and agent solutions integrated with corporate knowledge and operational systems.",
  },
  {
    ...experience[1],
    description:
      "Deep learning for acoustic events, connected-vehicle analytics, and software engineering for data at scale.",
  },
  {
    ...experience[2],
    company: "Federal University of Bahia",
    description:
      "Research in audio intelligence, acoustic event classification, and convolutional neural network models.",
  },
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

const pageCopy = {
  pt: {
    homeLabel: "Caléo Meneses — início",
    navLabel: "Navegação principal",
    navAbout: "Sobre",
    navProjects: "Projetos",
    navResearch: "Pesquisa",
    contact: "Vamos conversar",
    heroTitle: "Construindo sistemas de IA que chegam à",
    heroEmphasis: "produção.",
    heroLead:
      "Projeto agentes, sistemas RAG e plataformas de machine learning cloud-native que transformam processos complexos em soluções úteis, seguras e observáveis.",
    viewWork: "Conheça meu trabalho",
    summaryLabel: "Resumo profissional",
    years: "anos em tecnologia e IA",
    location: "Salvador, Bahia",
    explore: "Explore",
    aboutLabel: "Sobre mim",
    aboutStatement: "Sou especialista em Machine Learning e engenheiro de software. Trabalho na interseção entre",
    aboutEmphasis: "IA aplicada, sistemas distribuídos e cloud.",
    aboutOne:
      "Meu foco atual é desenhar sistemas agentivos confiáveis que combinam inteligência conversacional com workflows determinísticos, integrações empresariais, RAG e infraestrutura pronta para produção.",
    aboutTwo:
      "Atuo em todo o ciclo: arquitetura, protótipos, desenvolvimento de agentes e APIs, processamento assíncrono, deploy, testes, monitoramento e melhoria contínua.",
    capabilitiesLabel: "O que eu faço",
    capabilitiesTitle: "Da ideia ao sistema confiável.",
    capabilitiesLead:
      "Engenharia pragmática para produtos inteligentes que precisam funcionar no mundo real.",
    projectsLabel: "Projetos selecionados",
    projectsTitle: "Produtos, agentes e pesquisa em código.",
    allProjects: "Ver todos no GitHub",
    researchLabel: "Pesquisa atual · MBA USP/Esalq",
    researchTitle: "Quando LLMs ajudam a descobrir estrutura em dados não estruturados.",
    researchLead:
      "No MBA em Data Science, investigo como modelos de linguagem podem ampliar a análise de dados não estruturados e gerar conhecimento útil para operações complexas.",
    previousResearch:
      "Pesquisa anterior na UFBA: meu TCC em Engenharia Elétrica sobre detecção de violência em cenas acústicas com deep learning.",
    viewProject: "Ver projeto",
    experience: "Experiência",
    technologiesLabel: "Tecnologias",
    mainStack: "Stack principal",
    personalLabel: "Além da tecnologia",
    personalTitle: "Curiosidade também é uma forma de engenharia.",
    personalOne:
      "Minha curiosidade por tecnologia nasceu em família, entre computadores, ficção científica e conversas com meu pai sobre inteligência artificial. Essa ",
    personalReportLink: "história",
    personalOneAfter:
      " também fortaleceu em mim o compromisso de ampliar o acesso à educação tecnológica para jovens negros e periféricos.",
    personalTwo:
      "Foi essa combinação que me trouxe para a IA: transformar curiosidade em sistemas que aprendem, conectam conhecimento e ajudam pessoas a tomar decisões melhores.",
    formation:
      "Sou Engenheiro Eletricista formado pela UFBA, Técnico em Automação Industrial formado pelo IFBA e atualmente faço MBA em Data Science na USP/Esalq.",
    availability: "Disponível para conexões e boas conversas",
    contactTitle: "Vamos construir algo que",
    contactEmphasis: "importe.",
    backToTop: "Voltar ao topo",
  },
  en: {
    homeLabel: "Caléo Meneses — home",
    navLabel: "Main navigation",
    navAbout: "About",
    navProjects: "Projects",
    navResearch: "Research",
    contact: "Let's talk",
    heroTitle: "Building AI systems that make it to",
    heroEmphasis: "production.",
    heroLead:
      "I design agents, RAG systems, and cloud-native machine learning platforms that turn complex processes into useful, secure, and observable solutions.",
    viewWork: "Explore my work",
    summaryLabel: "Professional summary",
    years: "years in technology and AI",
    location: "Salvador, Brazil",
    explore: "Explore",
    aboutLabel: "About me",
    aboutStatement: "I am a Machine Learning specialist and software engineer working at the intersection of",
    aboutEmphasis: "applied AI, distributed systems, and cloud.",
    aboutOne:
      "My current focus is designing reliable agentic systems that combine conversational intelligence with deterministic workflows, enterprise integrations, RAG, and production-ready infrastructure.",
    aboutTwo:
      "I work across the entire lifecycle: architecture, prototypes, agents and APIs, asynchronous processing, deployment, testing, monitoring, and continuous improvement.",
    capabilitiesLabel: "What I do",
    capabilitiesTitle: "From idea to reliable system.",
    capabilitiesLead:
      "Pragmatic engineering for intelligent products that need to work in the real world.",
    projectsLabel: "Selected projects",
    projectsTitle: "Products, agents, and research in code.",
    allProjects: "View all on GitHub",
    researchLabel: "Current research · MBA USP/Esalq",
    researchTitle: "How LLMs can reveal structure in unstructured data.",
    researchLead:
      "In my Data Science MBA, I investigate how language models can expand the analysis of unstructured data and generate useful knowledge for complex operations.",
    previousResearch:
      "Previous research at UFBA: my Electrical Engineering thesis on violence detection in acoustic scenes using deep learning.",
    viewProject: "View project",
    experience: "Experience",
    technologiesLabel: "Technologies",
    mainStack: "Core stack",
    personalLabel: "Beyond technology",
    personalTitle: "Curiosity is also a form of engineering.",
    personalOne:
      "My curiosity about technology began at home, through computers, science fiction, and conversations with my father about artificial intelligence. That ",
    personalReportLink: "story",
    personalOneAfter:
      " also shaped my commitment to expanding access to technology education for Black and underserved young people.",
    personalTwo:
      "That combination brought me to AI: turning curiosity into systems that learn, connect knowledge, and help people make better decisions.",
    formation:
      "I hold a degree in Electrical Engineering from UFBA and a technical degree in Industrial Automation from IFBA. I am currently pursuing an MBA in Data Science at USP/Esalq.",
    availability: "Open to connections and meaningful conversations",
    contactTitle: "Let's build something that",
    contactEmphasis: "matters.",
    backToTop: "Back to top",
  },
};

export function PortfolioPage({ locale }: { locale: Locale }) {
  const text = pageCopy[locale];
  const localizedCapabilities = locale === "en" ? capabilitiesEn : capabilities;
  const localizedProjects = locale === "en" ? projectsEn : projects;
  const localizedExperience = locale === "en" ? experienceEn : experience;
  const jsonLd = getJsonLd(locale);

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
        <a className="brand" href="#inicio" aria-label={text.homeLabel}>
          CM<span>.</span>
        </a>
        <nav aria-label={text.navLabel}>
          <a href="#sobre">{text.navAbout}</a>
          <a href="#projetos">{text.navProjects}</a>
          <a href="#pesquisa">{text.navResearch}</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher locale={locale} />
          <a className="header-contact" href="mailto:caleomenesessantos@gmail.com">
            {text.contact} <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow"><span /> Machine Learning Specialist · Agentic AI Engineer</p>
          <h1>
            {text.heroTitle} <em>{text.heroEmphasis}</em>
          </h1>
          <p className="hero__lead">{text.heroLead}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projetos">
              {text.viewWork} <ArrowIcon />
            </a>
            <a className="button button--ghost" href="https://github.com/caleo-hub" target="_blank" rel="noreferrer">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="hero__aside" aria-label={text.summaryLabel}>
          <div><YearsInTech /><span>{text.years}</span></div>
          <div><strong>2×</strong><span>AWS Certified</span></div>
          <div><strong>BR</strong><span>{text.location}</span></div>
        </div>
        <a className="scroll-cue" href="#sobre">{text.explore} <span>↓</span></a>
      </section>

      <section className="section about" id="sobre">
        <div className="section-label">{text.aboutLabel}</div>
        <div className="about__content">
          <p className="statement">
            {text.aboutStatement} <strong>{text.aboutEmphasis}</strong>
          </p>
          <div className="about__copy">
            <p>{text.aboutOne}</p>
            <p>{text.aboutTwo}</p>
          </div>
        </div>
      </section>

      <section className="section capabilities">
        <div className="section-heading">
          <div>
            <div className="section-label">{text.capabilitiesLabel}</div>
            <h2>{text.capabilitiesTitle}</h2>
          </div>
          <p>{text.capabilitiesLead}</p>
        </div>
        <div className="capability-grid">
          {localizedCapabilities.map((item) => (
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
            <div className="section-label">{text.projectsLabel}</div>
            <h2>{text.projectsTitle}</h2>
          </div>
          <a className="text-link" href="https://github.com/caleo-hub?tab=repositories" target="_blank" rel="noreferrer">
            {text.allProjects} <ArrowIcon />
          </a>
        </div>
        <div className="project-list">
          {localizedProjects.map((project, index) => (
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
                  locale={locale}
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
          <div className="section-label section-label--light">{text.researchLabel}</div>
          <h2>{text.researchTitle}</h2>
          <p>{text.researchLead}</p>
          <div className="research__metrics">
            <span>Embeddings</span><span>Topic Modeling</span><span>Clustering</span><span>Explainable AI</span>
          </div>
          <p className="research__previous">
            {text.previousResearch} {" "}
            <a href="https://github.com/caleo-hub/violence-detection-acoustic-scenes" target="_blank" rel="noreferrer">
              {text.viewProject} <ArrowIcon />
            </a>
          </p>
        </div>
      </section>

      <section className="section experience">
        <div className="section-label">{text.experience}</div>
        <div className="experience-list">
          {localizedExperience.map((item) => (
            <article key={item.company}>
              <div><h3>{item.company}</h3><p>{item.role}</p></div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack" aria-label={text.technologiesLabel}>
        <p>{text.mainStack}</p>
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
          <div className="section-label">{text.personalLabel}</div>
          <h2>{text.personalTitle}</h2>
          <p>
            {text.personalOne}
            <a
              href="https://www.terra.com.br/visao-do-corre/corre-pro-futuro/como-a-tecnologia-e-heranca-de-familia-em-favela-de-salvador,4a4af9d10711365767976ee0dbff9ddbe45vy68c.html"
              target="_blank"
              rel="noreferrer"
            >
              {text.personalReportLink}
            </a>
            {text.personalOneAfter}
          </p>
          <p>{text.personalTwo}</p>
          <p className="personal-note__formation">{text.formation}</p>
        </div>
      </section>

      <section className="contact" id="contato">
        <p className="eyebrow"><span /> {text.availability}</p>
        <h2>{text.contactTitle} <em>{text.contactEmphasis}</em></h2>
        <a href="mailto:caleomenesessantos@gmail.com">caleomenesessantos@gmail.com <ArrowIcon /></a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Caléo Meneses</p>
        <div>
          <a href="https://www.linkedin.com/in/caleomeneses" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/caleo-hub" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <a href="#inicio">{text.backToTop} ↑</a>
      </footer>
      </main>
    </>
  );
}
