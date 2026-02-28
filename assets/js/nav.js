// Navigation — Le Phare de Malbuisson
// Pattern: initStickyNav() + initNav() + DOMContentLoaded unique
// Vanilla ES2020+, zéro librairie, < 30 lignes

function initStickyNav() {
  const nav = document.getElementById('nav-main');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 100);
  }, { passive: true });
}

function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-main');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function() {
    const isOpen = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('.nav__link').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initStickyNav();
  initNav();
});
