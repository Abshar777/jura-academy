// ------------------------------------------------------------------
// Delta Jura Academy — UAE Labour Law & HR Compliance
// Content taken from the course brochure.
// ------------------------------------------------------------------

export const BRAND = "Delta Jura Academy";

export const PLACEHOLDER = "/img/placeholder.svg";

// Optional asset slots — leave "" to use the built-in placeholder.
export const assets = {
  logoSrc: "/img/delta-logo-trans.png",   // navy logo, transparent bg — works on any light surface
  logoWhite: "/img/delta-logo-white.png", // white logo for dark surfaces
  heroVideo: "/video/hero.mp4",       // background video (muted, looped)
  heroImage: "",
  authorPhoto: "",
};

export const nav = {
  links: [
    { label: "The Course", href: "#aos" },
    { label: "Modules", href: "#security" },
    { label: "Who It's For", href: "#solutions" },
    { label: "Certification", href: "#roi" },
  ],
  login: { label: "Contact", href: "#demo" },
  cta: { label: "Enrol now", href: "#demo" },
};

export const announcement = {
  text: "KHDA-approved certificate · AED 749 + VAT",
  cta: "Enrol now",
  href: "#demo",
};

export const hero = {
  title: "UAE Labour Law & HR Compliance",
  subtitle: "Professional Certificate Course — practical UAE employment law for the people side of work.",
  cta: { label: "Enrol now", href: "#demo" },
};

export const introAos = {
  eyebrow: "Professional Certificate Course",
  title: "A practical understanding of UAE employment law",
  caption: "KHDA APPROVED",
  body:
    "A structured overview of the UAE private-sector employment framework — covering the key compliance requirements affecting employers, employees and everyday workplace decisions.",
  nodes: ["Understand", "Apply", "Comply"],
  cta: { label: "See the syllabus", href: "#security" },
};

// Course details (4 cards)
export const innovations = {
  eyebrow: " details",
  title:"Course details",
  intro:
    "A focused, single-day programme for professionals handling people, policies and workplace decisions.",
  cards: [
    { title: "Duration", body: "6–7 hours of focused, practical training delivered in a single day.", image: "https://framerusercontent.com/images/9v9JwJh5ozSbqLAyyz8AcLx1QkM.png?width=2048&height=2436" },
    { title: "Delivery", body: "Single-day intensive, built around real workplace scenarios.", image: "https://framerusercontent.com/images/Vjp7LqqjHmfNtNS10brky4fElE.png?width=2048&height=2436" },
    { title: "Taught by", body: "Practising legal professionals with UAE employment law expertise.", image: "https://framerusercontent.com/images/skm3UWtazgADzbKcNpldXDNADA.png?width=2048&height=2436" },
    { title: "Certification", body: "A KHDA-approved professional certificate on completion.", image: "https://framerusercontent.com/images/bS0ELLdwxgtVnyxuHvejiT3OuA.webp?scale-down-to=2048&width=2160&height=1214" },
  ],
};

// Who should attend (carousel)
export const everyTeam = {
  title: ["Who should", "attend."],
  body:
    "Designed for anyone handling employment, compliance and workplace decisions in the UAE.",
  items: [
    { label: "HR Professionals", caption: "Handle people decisions with confidence.", image: "https://framerusercontent.com/images/abYSmOlujxtnpP6gu3y6zjmvw4.webp?scale-down-to=1024&width=1000&height=1250" },
    { label: "In-house Legal", caption: "Advise the business on employment risk.", image: "https://framerusercontent.com/images/5bAO1PDz8U8pYbzvosP2jYIdnGg.webp?scale-down-to=1024&width=1000&height=1250" },
    { label: "PROs", caption: "Stay ahead of MoHRE compliance.", image: "https://framerusercontent.com/images/mrEHEr4OHAYryQnVQqy2VoGAQw.webp?scale-down-to=1024&width=1000&height=1250" },
    { label: "Recruiters", caption: "Get hiring and contracts right.", image: "https://framerusercontent.com/images/vuqeYveiafQ8irALqw1GHgRG2KQ.webp?scale-down-to=1024&width=1000&height=1250" },
    { label: "SME Owners", caption: "Protect your business and your team.", image: "https://framerusercontent.com/images/jTtsVVBhSR0HphLKfSJpeVnmPos.webp?scale-down-to=1024&width=1000&height=1250" },
    { label: "Compliance", caption: "Manage records and reduce exposure.", image: "https://framerusercontent.com/images/jPFd2uhwZ8bjPJtdyRcLjZ6NVU.webp?scale-down-to=1024&width=1000&height=1250" },
  ],
};

// Certification / at-a-glance stats (full-bleed)
export const roi = {
  eyebrow: "Certification",
  title: "A KHDA-approved certificate that means something",
  readMore: "View the syllabus",
  image: "",
  body: "",
  video:"/video/vision.mp4",
  stats: [
    { value: "7", label: "practical modules — from the legal framework to contract drafting" },
    { value: "6–7 hrs", label: "single-day intensive, built around real UAE workplace scenarios" },
    { value: "AED 749", label: "+ VAT — includes your KHDA-approved professional certificate" },
  ],
};

// Our approach (practical learning)
export const vision = {
  eyebrow: "Our approach",
  paragraphs: [
    "Delta Jura Academy delivers practical legal education for professionals — not abstract theory, but the rules you apply at work.",
    "Every module is built around real scenarios: contract review, end-of-service (EOSB) calculations, drafting exercises and compliance risk identification.",
    "Taught by practising legal professionals, the course turns UAE labour law into decisions you can make with confidence.",
  ],
  author: { name: "Delta Jura Academy", role: "Practical legal education for professionals" },
  image: "https://framerusercontent.com/images/NsGTBCDAjCwXrcqHRuhfqpswqE.webp?width=2048&height=2048",
  authorPhoto:"https://framerusercontent.com/images/WyrkchHowjgXD95FQWloBCut5BI.webp?width=2500&height=3748"
};

// Learning outcomes (dark grid)
export const security = {
  title: "What you'll be able to do",
  body:
    "By the end of the course you'll apply UAE employment rules with confidence — across hiring, pay, conduct, termination and disputes.",
  items: [
    { code: "Framework", desc: "Understand the UAE employment law framework and its scope." },
    { code: "Obligations", desc: "Identify employer obligations and everyday compliance duties." },
    { code: "Contracts", desc: "Review and draft compliant employment contracts." },
    { code: "Pay & Leave", desc: "Apply rules on wages, working hours, leave and termination." },
    { code: "Disputes", desc: "Handle disciplinary action and MoHRE dispute processes." },
    { code: "Records", desc: "Manage employment documentation and reduce exposure." },
  ],
};

export const finalCta = {
  title: "Enrol in the next UAE Labour Law & HR Compliance cohort.",
  body:
    "One focused day. Seven practical modules. A KHDA-approved certificate — AED 749 + VAT.",
  cta: { label: "Enrol now", href: "#demo" },
  image: "/img/cta-illustration.webp", // line-art cartoon illustration
};

export const footer = {
  columns: [
    { title: "Course", links: ["Overview", "Modules", "Learning outcomes", "Certification"] },
    { title: "Who it's for", links: ["HR Professionals", "In-house Legal", "PROs", "Recruiters", "SME Owners"] },
    { title: "Academy", links: ["About", "Instructors", "Contact", "Enrol"] },
    { title: "Legal", links: ["Privacy", "Terms", "KHDA"] },
  ],
  social: ["LinkedIn", "Instagram", "WhatsApp"],
  copyright: "© 2026 Delta Jura Academy. All rights reserved.",
};

// The 7 modules (from the brochure) — available for a modules section.
export const modules = [
  { n: "01", title: "UAE Employment Law Framework", desc: "Overview of UAE Labour Law, scope, application and employer/employee obligations." },
  { n: "02", title: "Recruitment, Work Permits & Employment Contracts", desc: "Recruitment compliance, work permits, employment models, contract essentials and probation." },
  { n: "03", title: "Wages, Working Hours & Leave Entitlements", desc: "Working hours, overtime, WPS compliance, salary deductions, annual leave and statutory entitlements." },
  { n: "04", title: "Workplace Conduct & Disciplinary Procedures", desc: "Workplace obligations, misconduct, investigations, due process and disciplinary communication." },
  { n: "05", title: "Termination & End-of-Service Benefits", desc: "Notice periods, termination, unlawful termination risks and EOSB calculations." },
  { n: "06", title: "Labour Disputes & Compliance Management", desc: "MoHRE procedures, inspections, penalties, employment records and compliance practices." },
  { n: "07", title: "Employment Contract Drafting Workshop", desc: "Contract structure, key clauses, compliance considerations and drafting exercises." },
];
