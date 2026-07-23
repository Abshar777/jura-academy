import { useEffect, useRef } from 'react'
import { vision, assets, PLACEHOLDER } from '../data/content.js'

function VisionVideo({ src }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    const p = v.play()
    if (p && p.catch) p.catch(() => {})
  }, [])
  return (
    <video
      ref={ref}
      className="block h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      controls={none}
      playsInline
      preload="auto"
    />
  )
}

export default function Vision() {
  const [p1, p2, p3] = vision.paragraphs
  return (
    <section className="bg-[#e7e6e2] px-[clamp(1rem,4vw,2rem)] py-[clamp(3rem,6vw,5rem)]" id="company">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[clamp(2rem,5vw,4rem)] min-[980px]:grid-cols-[1fr_2fr]">
        <div className="flex flex-col justify-between gap-8 min-[980px]:min-h-[620px] min-[980px]:gap-0">
          <h2 className="vision__title">{vision.eyebrow}</h2>
          <div>
            <div className="mb-4 aspect-[4/5] w-full max-w-[320px] overflow-hidden bg-[#d9d8d3]">
              <img src={vision.authorPhoto || PLACEHOLDER} alt="" className="block h-full w-full object-cover" />
            </div>
            <div className="font-medium">{vision.author.name}</div>
            <div className="text-[.9rem] text-soft">{vision.author.role}</div>
            <svg className="mt-[.6rem] h-8 w-24 text-ink opacity-75" viewBox="0 0 120 40" aria-hidden>
              <path d="M4 28 C 18 6, 26 34, 38 18 S 60 6, 72 24 C 80 34, 92 10, 116 20"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-[clamp(2rem,4vw,3.5rem)]">
          <div className="grid grid-cols-1 gap-[clamp(1.5rem,3vw,3rem)] min-[760px]:grid-cols-2">
            <div className="space-y-4 text-[.95rem] leading-relaxed text-ink">
              <p>{p1}</p>
              <p>{p2}</p>
            </div>
            <div className="text-[.95rem] leading-relaxed text-ink">
              <p>{p3}</p>
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden bg-[#d9d8d3]">
            {vision.video ? (
              <VisionVideo src={vision.video} />
            ) : (
              <img src={vision.image || PLACEHOLDER} alt="" className="block h-full w-full object-cover" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
