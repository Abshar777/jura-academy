import { useEffect, useState } from 'react'
import { BRAND, nav, assets } from '../data/content.js'

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-[60] bg-canvas border-b transition-colors duration-200 ${
        stuck ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="relative flex h-[66px] items-center justify-between px-[clamp(1rem,4vw,2.2rem)]">
        <button
          className="inline-flex cursor-pointer items-center gap-[.55rem] border-0 bg-transparent py-[.3rem] text-[.95rem] text-ink"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="inline-flex flex-col gap-1">
            <span className={`h-[1.5px] w-[18px] rounded bg-ink transition-transform duration-200 ${open ? 'translate-y-[2.75px] rotate-45' : ''}`} />
            <span className={`h-[1.5px] w-[18px] rounded bg-ink transition-transform duration-200 ${open ? '-translate-y-[2.75px] -rotate-45' : ''}`} />
          </span>
          {open ? 'Close' : 'Menu'}
        </button>

        <a
          href="#top"
          className="absolute left-1/2 -translate-x-1/2 font-display text-[1.4rem] font-semibold tracking-[.04em] text-ink"
          aria-label={BRAND}
        >
          {assets.logoSrc
            ? <img src={assets.logoSrc} alt={BRAND} className="block h-11 w-auto" />
            : BRAND.toUpperCase()}
        </a>

        <a className="text-[.95rem] text-ink hover:text-brand" href={nav.login.href}>{nav.login.label}</a>
      </div>

      {/* Menu panel */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-canvas transition-[max-height] duration-300 ${
          open ? 'max-h-[460px] border-b border-line shadow-[var(--shadow-soft)]' : 'max-h-0'
        }`}
        role="dialog"
        aria-hidden={!open}
      >
        <div className="mx-auto flex max-w-[1180px] flex-col gap-[.6rem] px-[clamp(1rem,4vw,2.2rem)] pb-[2.2rem] pt-[1.4rem]">
          <nav className="flex flex-col" aria-label="Primary">
            {nav.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-[.85rem] font-display text-[1.5rem] font-medium tracking-[-.01em] text-ink hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a className="btn btn--dark btn--lg mt-4 self-start" href={nav.cta.href} onClick={() => setOpen(false)}>
            {nav.cta.label}
          </a>
        </div>
      </div>
    </header>
  )
}
