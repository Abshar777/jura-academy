import { security } from '../data/content.js'

function Seal({ n }) {
  return (
    <svg className="mt-auto h-14 w-14 text-ink/35" viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity=".6" />
      <ellipse cx="32" cy="32" rx="14" ry="30" fill="none" stroke="currentColor" strokeWidth="1" opacity=".4" />
      <line x1="2" y1="32" x2="62" y2="32" stroke="currentColor" strokeWidth="1" opacity=".4" />
      <line x1="7" y1="19" x2="57" y2="19" stroke="currentColor" strokeWidth="1" opacity=".28" />
      <line x1="7" y1="45" x2="57" y2="45" stroke="currentColor" strokeWidth="1" opacity=".28" />
      <text x="32" y="37" textAnchor="middle" fontSize="15" fill="currentColor" className="font-display">{n}</text>
    </svg>
  )
}

export default function Security() {
  return (
    <section className="bg-[#e7e6e2] px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,7rem)] text-ink" id="security">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 max-w-[620px]">
          <h2 className="security__title">{security.title}</h2>
          <a href="#" className="mt-3 inline-block text-[1.05rem] text-soft hover:text-ink">
            <span aria-hidden>↳</span> Read more
          </a>
          <p className="mt-8 max-w-[480px] text-[.95rem] leading-relaxed text-soft">{security.body}</p>
        </div>

        <div className="grid grid-cols-2 border-t border-ink/15 min-[620px]:grid-cols-3 min-[1024px]:grid-cols-6">
          {security.items.map((it, i) => (
            <div
              key={it.code}
              className="flex min-h-[300px] flex-col border-l border-ink/15 px-[1.3rem] pb-[1.6rem] pt-[1.8rem] first:border-l-0 first:pl-0"
            >
              <div className="font-display text-[1.05rem] font-medium text-ink">{it.code}</div>
              <p className="mt-2 text-[.82rem] leading-relaxed text-soft">{it.desc}</p>
              <Seal n={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
