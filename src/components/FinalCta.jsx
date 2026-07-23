import { finalCta, PLACEHOLDER } from '../data/content.js'

export default function FinalCta() {
  return (
    <section className="px-[clamp(1rem,4vw,2rem)] py-[clamp(2rem,4vw,3.5rem)]" id="demo">
      <div className="mx-auto grid max-w-[980px] grid-cols-1 items-stretch gap-[clamp(.8rem,2vw,1.3rem)] overflow-hidden rounded-[22px] bg-brand p-[clamp(.75rem,1.5vw,1.1rem)] text-white min-[760px]:grid-cols-2">
        <div className="flex flex-col p-[clamp(1.1rem,2.5vw,1.9rem)]">
          <h2 className="cta__title">{finalCta.title}</h2>
          <p className="mt-[1rem] max-w-[420px] text-[.95rem] text-[#cfe0d7]">{finalCta.body}</p>
          <a className="btn btn--pill cta__btn mt-auto self-start" href={finalCta.cta.href}>
            {finalCta.cta.label}
            <span className="btn__arrow" aria-hidden>→</span>
          </a>
        </div>
        <div className="flex min-h-[190px] items-center justify-center overflow-hidden rounded-[16px] bg-white p-[clamp(.8rem,2vw,1.5rem)]">
          <img
            src={finalCta.image || PLACEHOLDER}
            alt=""
            className="block h-full w-full object-contain"
            onError={(e) => { e.currentTarget.src = PLACEHOLDER }}
          />
        </div>
      </div>
    </section>
  )
}
