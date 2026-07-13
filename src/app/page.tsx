import { Section } from "@/components/section";

const highlights = [
  "Projetos de IA aplicada",
  "Automacoes para operacoes",
  "Arquitetura cloud e produtos digitais"
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Caléo</p>
          <h1>Construindo sistemas simples para problemas que merecem cuidado.</h1>
          <p className="hero__lead">
            Este sera o espaco principal para apresentar projetos, ideias,
            experimentos e caminhos profissionais.
          </p>
          <div className="hero__actions" aria-label="Acoes principais">
            <a href="#projetos">Ver projetos</a>
            <a href="mailto:contato@example.com">Contato</a>
          </div>
        </div>
      </section>

      <Section id="sobre" title="Sobre">
        <p>
          Base inicial do site pessoal. A proxima etapa e substituir este texto
          por uma apresentacao real, com foto, areas de atuacao e links.
        </p>
      </Section>

      <Section id="projetos" title="Projetos">
        <ul className="highlight-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="contato" title="Contato">
        <p>
          Adicione aqui e-mail, LinkedIn, GitHub e outros canais que devem
          aparecer no dominio publico.
        </p>
      </Section>
    </main>
  );
}
