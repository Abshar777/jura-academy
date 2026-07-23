import { useEffect, useRef } from 'react'
import { hero, assets } from '../data/content.js'

function VideoBg() {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    const p = v.play()
    if (p && p.catch) p.catch(() => { })
  }, [])
  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={assets.heroVideo}
      autoPlay
      muted
      controls={"none"}
      loop

      playsInline
      preload="auto"
    />
  )
}

function Copy() {
  return (
    <div className="relative z-[2] mx-auto w-full max-w-[1180px] px-[clamp(1rem,4vw,2.2rem)] pb-[clamp(2.5rem,6vw,4.5rem)] text-center">
      <h1 className="hero__title">{hero.title}</h1>
      <div className="mt-[1.6rem] flex flex-wrap items-center justify-center gap-[1.2rem]">
        <span className="hero__sub">{hero.subtitle}</span>
        {/* <a className="btn btn--pill bg-ink" href={hero.cta.href}>
          {hero.cta.label}
          <span className="btn__arrow" aria-hidden>→</span>
        </a> */}
      </div>
    </div>
  )
}

export default function Hero() {
  if (assets.heroVideo) {
    return (
      <section className="hero" id="top">
        <div className="hero__scene" aria-hidden>
          <VideoBg />
          <div className="hero__scrim" />
        </div>
        <Copy />
      </section>
    )
  }
  if (assets.heroImage) {
    return (
      <section className="hero" id="top">
        <div className="hero__scene hero__scene--image" aria-hidden style={{ backgroundImage: `url(${assets.heroImage})` }}>
          <div className="hero__scrim" />
        </div>
        <Copy />
      </section>
    )
  }
  return (
    <section className="hero" id="top">
      <div className="hero__scene" aria-hidden>
        <div className="hero__panel">
          <div className="hero__task">
            <span className="hero__check hero__check--done" />
            <span className="hero__task-text">Review the employment contract</span>
          </div>
          <div className="hero__task">
            <span className="hero__check" />
            <span className="hero__task-text">Calculate end-of-service benefits</span>
            <span className="hero__cursor" />
            <span className="hero__chip">EOSB</span>
          </div>
          <div className="hero__task hero__task--faint">
            <span className="hero__check" />
            <span className="hero__task-text">Check WPS salary compliance</span>
          </div>
        </div>
        <div className="hero__scrim" />
      </div>
      <Copy />
    </section>
  )
}
