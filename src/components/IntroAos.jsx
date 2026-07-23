import { introAos } from '../data/content.js'

export default function IntroAos() {
  return (
    <section className="aos bg-canvas text-ink" id="aos">
      <div className="mx-auto max-w-[820px] px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,9vw,7rem)] text-center">
        <span className="text-[.85rem] font-semibold text-brand">{introAos.eyebrow}</span>
        <h2 className="aos__title mb-[1.2rem] mt-4">{introAos.title}</h2>
        <span className="mb-[.9rem] inline-block text-[.78rem] uppercase tracking-[.12em] text-brand">{introAos.caption}</span>
        <p className="mx-auto max-w-[560px] text-[1.1rem] text-soft">{introAos.body}</p>

        <div className="aos__diagram" aria-hidden>
          <span className="aos__node aos__node--core border border-brand/40 bg-brand/10 text-brand">UAE Law</span>
          <span className="aos__pillars">
            {introAos.nodes.map((n) => (
              <span className="aos__node" key={n}>{n}</span>
            ))}
          </span>
        </div>

        <a className="btn btn--light btn--lg" href={introAos.cta.href}>{introAos.cta.label}</a>
      </div>
    </section>
  )
}
