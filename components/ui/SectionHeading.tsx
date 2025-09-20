type Props = { title: string; eyebrow?: string; paragraph?: string; id?: string; };
export default function SectionHeading({ title, eyebrow, paragraph, id }: Props) {
  return (
    <div id={id} className="section-heading text-center max-w-2xl mx-auto mb-10">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{title}</h2>
      {paragraph && <p className="text-neutral-600 mt-3">{paragraph}</p>}
    </div>
  );
}
