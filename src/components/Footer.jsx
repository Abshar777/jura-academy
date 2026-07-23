import { BRAND, footer, assets } from '../data/content.js'

function Column({ title, links }) {
  return (
    <div>
      <div className="mb-[.9rem] text-[.9rem] font-semibold text-ink">{title}</div>
      <ul className="space-y-[.55rem]">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-[.88rem] text-soft hover:text-ink">{l}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#e7e6e2] px-[clamp(1rem,4vw,2rem)] pb-10 pt-[clamp(3rem,6vw,5rem)] text-soft">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-6 pb-12 min-[560px]:grid-cols-3 min-[980px]:grid-cols-7">
          {footer.columns.map((col) => (
            <Column key={col.title} title={col.title} links={col.links} />
          ))}
          <Column title="Social" links={footer.social} />
        </div>

        <div className="border-t border-ink/12 pt-8">
          <img src={assets.logoSrc} alt={BRAND} className="h-16 w-auto" />
        </div>

        <div className="mt-6 text-[.82rem] text-soft">{footer.copyright}</div>
      </div>
    </footer>
  )
}
