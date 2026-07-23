import { innovations, PLACEHOLDER } from '../data/content.js'

export default function Innovations() {
  return (
    <section className="px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,7rem)]" id="product">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 max-w-[560px] text-left">
          <span className="text-[.8rem] font-semibold tracking-[.04em] text-brand">{innovations.eyebrow}</span>
          <h2 className="aos__title mb-[1.2rem] mt-4">{innovations.title}</h2>
          <p className="mt-4 text-[1.05rem] text-soft">{innovations.intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 min-[560px]:grid-cols-2 min-[980px]:grid-cols-4">
          {innovations.cards.map((c) => (
            <article className="card flex flex-col" key={c.title}>
              <div className="card__thumb mb-[1.2rem]" aria-hidden>
                <img src={c.image || PLACEHOLDER} alt="" className="card__img" />
              </div>
              <h3 className="card__title mb-[.6rem]">{c.title}</h3>
              <p className="text-[.95rem] text-soft">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
