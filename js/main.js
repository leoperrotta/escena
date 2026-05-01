const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
}

const path = window.location.pathname.replace(/\/$/, '').replace('.html', '');
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').replace('.html', '');
  if (href === path || (path === '' || path === '/index') && href === '/index') {
    link.classList.add('active');
  }
});
