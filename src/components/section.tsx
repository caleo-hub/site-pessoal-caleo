type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="section__inner">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
