import { useEffect, useRef } from 'react'
import { roi, PLACEHOLDER } from '../data/content.js'

function BgVideo({ src }) {
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
      src={src}
      autoPlay
      muted
      loop
      controls={"none"}
      playsInline
      preload="auto"
      aria-hidden
    />
  )
}

export default function RoiReport() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-[clamp(1rem,4vw,2rem)] py-[clamp(3rem,7vw,6rem)]"
      id="roi"
    >
      {roi.video ? (
        <BgVideo src={roi.video} />
      ) : (
        <div className="roi__bg" aria-hidden style={{ backgroundImage: `url(${roi.image || PLACEHOLDER})` }} />
      )}
      <div className="roi__scrim" aria-hidden />

      <div className="relative z-[2] text-center">
        <span className="text-[.82rem] font-semibold uppercase tracking-[.14em] text-white/70">{roi.eyebrow}</span>
        <h2 className="roi__title mb-[.5rem] mt-[.4rem]">{roi.title}</h2>
        <a className="inline-block text-[1.05rem] text-white/70 hover:text-white" href="#"><span aria-hidden>↳</span> {roi.readMore}</a>
      </div>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-8 min-[640px]:grid-cols-3">
        {roi.stats.map((s) => (
          <div className="border-t border-white/25 pt-[1.1rem]" key={s.value}>
            <div className="stat__value">{s.value}</div>
            <div className="max-w-[22ch] text-[.92rem] text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
