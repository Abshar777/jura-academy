// Jura Academy — interactions

// Sticky-nav shadow on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Close mobile menu after tapping a link
nav.querySelectorAll('.nav__menu a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('is-open'))
);

// Dismiss announcement bar
document.querySelector('.announce__close')?.addEventListener('click', () => {
  document.getElementById('announce')?.classList.add('is-hidden');
});
