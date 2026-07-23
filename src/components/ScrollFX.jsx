import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Global scroll effects (mirrors the delta-trading-hub pattern):
 *  - Lenis smooth scrolling, synced to GSAP ScrollTrigger
 *  - Hero: intro animation on load
 *  - Every other section: content blocks reveal as THEY enter the viewport
 *    (ScrollTrigger.batch → per-element trigger), fade + slide up, staggered,
 *    ease expo.out, once. Card grids stagger their items.
 */
export default function ScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── Lenis smooth scroll ──
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
    const rafId = requestAnimationFrame(raf)

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -70, duration: 1.4 })
    }
    document.addEventListener('click', onClick)

    let ctx
    const onLoad = () => ScrollTrigger.refresh()

    if (!reduce) {
      const skip = (el) => {
        if (el.getAttribute('aria-hidden') === 'true') return true
        const pos = getComputedStyle(el).position
        return pos === 'absolute' || pos === 'fixed'
      }

      // reveal targets for one section = its top-level content blocks,
      // with card-grid children expanded so they stagger individually.
      const collect = (section) => {
        const roots = section.querySelectorAll(':scope > div')
        const rootList = roots.length ? Array.from(roots) : [section]
        const out = []
        rootList.forEach((root) => {
          if (skip(root)) return
          Array.from(root.children).forEach((child) => {
            if (skip(child)) return
            const cs = getComputedStyle(child)
            const many = child.children.length >= 3
            const gridish = cs.display === 'grid' || (cs.display === 'flex' && cs.flexWrap === 'wrap')
            if (many && gridish && cs.overflowX !== 'hidden') {
              Array.from(child.children).forEach((gc) => { if (!skip(gc)) out.push(gc) })
            } else {
              out.push(child)
            }
          })
        })
        return out
      }

      ctx = gsap.context(() => {
        // ── Hero intro (on load, not scroll-triggered) ──
        const heroBits = gsap.utils.toArray('.hero__title, .hero__sub, .hero .btn')
        if (heroBits.length) {
          gsap.fromTo(
            heroBits,
            { y: 34, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1.1, ease: 'expo.out', stagger: 0.12, delay: 0.15, clearProps: 'transform' }
          )
        }

        // ── Section reveals (each block triggers on its own entry) ──
        gsap.utils.toArray('main section, footer').forEach((section) => {
          if (section.classList.contains('hero') || section.id === 'top') return
          try {
            const targets = collect(section)
            if (!targets.length) return

            gsap.set(targets, { y: 30, autoAlpha: 0 })
            ScrollTrigger.batch(targets, {
              start: 'top 88%',
              once: true,
              onEnter: (batch) =>
                gsap.to(batch, {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.9,
                  ease: 'expo.out',
                  stagger: 0.08,
                  clearProps: 'transform,opacity,visibility',
                  overwrite: true,
                }),
            })
          } catch (err) {
            console.warn('ScrollFX: skipped a section', err)
          }
        })
      })

      // Recompute trigger positions once layout settles (fonts, images, video)
      ScrollTrigger.refresh()
      window.addEventListener('load', onLoad)
      const t = window.setTimeout(() => ScrollTrigger.refresh(), 600)

      return () => {
        cancelAnimationFrame(rafId)
        document.removeEventListener('click', onClick)
        window.removeEventListener('load', onLoad)
        window.clearTimeout(t)
        if (ctx) ctx.revert()
        lenis.destroy()
      }
    }

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])

  return null
}
