import { modules } from '../data/content.js'

export default function Modules() {
  return (
    <section id="modules" className=" bg-canvas px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[clamp(2.5rem,5vw,4.5rem)] min-[900px]:grid-cols-[minmax(260px,330px)_1fr]">
        {/* Sticky header */}
        <div className="min-[900px]:sticky min-[900px]:top-[90px] min-[900px]:self-start">
          <span className="text-[.8rem] font-semibold uppercase tracking-[.14em] text-brand">Course structure</span>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-normal leading-[1.04] tracking-[-.03em] text-ink">
            Seven practical modules
          </h2>
          <p className="mt-5 max-w-[300px] text-[.98rem] leading-relaxed text-soft">
            A structured path from the UAE legal framework to a hands-on contract-drafting workshop — principles first, practice throughout.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 text-[.82rem]">
            <span className="rounded-full border border-line bg-white px-3 py-1.5 text-ink"><b className="font-semibold">7</b> modules</span>
            <span className="rounded-full border border-line bg-white px-3 py-1.5 text-ink"><b className="font-semibold">6–7</b> hours</span>
            <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 font-medium text-brand">KHDA-approved</span>
          </div>
        </div>

        {/* Module list */}
        <ol className="flex flex-col">
          {modules.map((m) => (
            <li
              key={m.n}
              className="group relative flex gap-5 border-t border-line py-6 last:border-b sm:gap-8"
            >
              {/* teal accent line that grows on hover */}
              <span className="pointer-events-none absolute left-0 top-[-1px] h-px w-0 bg-brand  transition-all duration-500 ease-out group-hover:w-full" aria-hidden />
              <span className="w-[52px] shrink-0 font-display text-[1.7rem] font-normal tabular-nums leading-none text-brand/30 transition-colors duration-300 group-hover:text-brand">
                {m.n}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-[1.12rem] font-medium leading-snug text-ink">{m.title}</h3>
                <p className="mt-2 max-w-[62ch] text-[.92rem] leading-relaxed text-soft">{m.desc}</p>
              </div>
              <span className="mt-1 hidden shrink-0 translate-x-[-4px] items-start text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:flex" aria-hidden>
                →
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
