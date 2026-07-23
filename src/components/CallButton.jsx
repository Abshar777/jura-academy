import { useEffect, useState } from 'react'

const PHONE = '+971507528009'

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden>
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
    </svg>
  )
}

export default function CallButton() {
  /* label pokes out periodically to nudge the visitor to call */
  const [poke, setPoke] = useState(false)

  useEffect(() => {
    const show = () => {
      setPoke(true)
      window.setTimeout(() => setPoke(false), 2800)
    }
    const first = window.setTimeout(show, 3000)      // first nudge shortly after load
    const loop = window.setInterval(show, 9000)      // then every ~9s
    return () => { window.clearTimeout(first); window.clearInterval(loop) }
  }, [])

  return (
    <a
      href={`tel:${PHONE}`}
      aria-label="Call our expert now"
      className="group fixed z-[90] right-4 bottom-4 md:right-5 md:bottom-5 flex flex-row-reverse items-center gap-3"
    >
      {/* Button */}
      <span className="relative w-[54px] h-[54px] md:w-[58px] md:h-[58px] shrink-0">
        {/* pulsing halo */}
        <span className="absolute inset-0 rounded-full bg-ink opacity-20 animate-ping" />

        <span className="relative w-full h-full rounded-full bg-ink text-white flex items-center justify-center
          shadow-[0_12px_34px_-8px_rgba(0,0,0,0.55)] transition-transform duration-300
          group-hover:scale-105 group-active:scale-95 animate-call-shake group-hover:animate-none">
          <PhoneIcon className="w-[18px] scale-x-[-1] h-[18px] md:w-[19px] md:h-[19px]" />

          {/* online / available dot */}
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#22c55e] border-2 border-ink">
            <span className="absolute -inset-[2px] rounded-full bg-[#22c55e]/60 animate-ping" />
          </span>
        </span>
      </span>

      {/* Label — appears on hover and on the periodic nudge */}
      <span
        className={[
          'pointer-events-none whitespace-nowrap rounded-2xl bg-ink text-white px-4 py-2.5',
          'shadow-[0_12px_34px_-10px_rgba(0,0,0,0.5)] flex flex-col leading-tight origin-right text-right items-end',
          'transition-all duration-300 ease-out',
          poke ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95',
          'group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100',
        ].join(' ')}
      >
        <span className="text-[9px] tracking-[0.14em] uppercase text-[#4ade80] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" /> Available now
        </span>
        <span className="text-[13px] tracking-[0.005em] mt-0.5">Talk to our expert</span>
      </span>
    </a>
  )
}
