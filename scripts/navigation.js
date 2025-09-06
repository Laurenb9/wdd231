// Responsive navigation: hamburger toggles the nav, keeps ARIA in sync, adds no “twitch”
const btn = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');

function toggleMenu(){
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
  // lock body scroll when menu is open on small screens (optional)
  document.body.style.overflow = open ? 'hidden' : '';
}

btn.addEventListener('click', toggleMenu);

// Close menu on focus out / large screen resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 760 && nav.classList.contains('open')) {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});
