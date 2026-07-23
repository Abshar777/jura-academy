import { useState } from 'react'
import { announcement } from '../data/content.js'

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <div className="relative flex items-center justify-center gap-2 bg-brand px-4 py-[.55rem] text-[.84rem] text-[#eaf1ec]">
      <span>{announcement.text}</span>
      <a className="font-semibold text-white hover:underline" href={announcement.href}>
        {announcement.cta} <span aria-hidden>→</span>
      </a>
      <button
        className="absolute right-4 cursor-pointer border-0 bg-transparent text-[1.15rem] leading-none text-[#bcd0c5] hover:text-white"
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
      >
        ×
      </button>
    </div>
  )
}
