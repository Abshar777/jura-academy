import { useState } from 'react'
import { everyTeam, PLACEHOLDER } from '../data/content.js'

const CARD_W = 260
const GAP = 20

export default function EveryTeam() {
  const items = everyTeam.items
  const [active, setActive] = useState(3)
  const go = (dir) => setActive((i) => Math.min(items.length - 1, Math.max(0, i + dir)))
  const offset = active * (CARD_W + GAP) + CARD_W / 2

  return (
    <section className="overflow-hidden bg-canvas py-[clamp(4rem,8vw,6rem)]" id="solutions">
      <div className="mx-auto max-w-[1180px] px-[clamp(1rem,4vw,2rem)] text-center">
        <h2 className="team__title">
          {everyTeam.title.map((line, i) => <span key={i}>{line}</span>)}
        </h2>
        <p className="mx-auto mt-[1.2rem] max-w-[500px] text-soft">{everyTeam.body}</p>
      </div>

      <div className="relative mx-auto my-10 flex max-w-[1180px] items-center justify-center gap-6 px-[clamp(1rem,4vw,3rem)]">
        <button className="team__arrow" aria-label="Previous" onClick={() => go(-1)} disabled={active === 0}>←</button>
        <div className="team__pills" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              className={`team__pill ${i === active ? 'is-active' : ''}`}
              aria-label={`Go to ${items[i].label}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button className="team__arrow" aria-label="Next" onClick={() => go(1)} disabled={active === items.length - 1}>→</button>
      </div>

      <div className="w-full overflow-hidden">
        <div className="team__track" style={{ transform: `translateX(calc(50% - ${offset}px))` }}>
          {items.map((it, i) => (
            <button
              key={it.label}
              className={`team-card ${i === active ? 'is-active' : ''}`}
              style={{ width: CARD_W }}
              onClick={() => setActive(i)}
            >
              <img src={it.image || PLACEHOLDER} alt="" className="team-card__img" />
              <span className="team-card__label">{it.label}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="team__caption mt-[1.6rem] text-center text-ink">{items[active].caption}</p>
    </section>
  )
}
