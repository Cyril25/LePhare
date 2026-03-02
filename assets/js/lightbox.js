// Lightbox — Le Phare de Malbuisson
// Pattern: initLightbox() + DOMContentLoaded unique
// Vanilla ES2020+, zéro librairie

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const imgs = document.querySelectorAll('.gallery__item img');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  // F5: sauvegarder l'overflow du body avant modification
  let previousOverflow = '';
  let currentIndex = 0;
  const total = imgs.length;

  // F1: éléments focusables dans la lightbox pour le focus trap
  const focusableEls = [closeBtn, prevBtn, nextBtn];

  function open(index) {
    currentIndex = index;
    const img = imgs[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    // F5: sauvegarder overflow uniquement à la première ouverture, pas à la navigation
    if (!lightbox.classList.contains('lightbox--open')) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      lightbox.classList.add('lightbox--open');
      closeBtn.focus(); // F1: focus sur le premier élément interactif
    }
  }

  function close() {
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = previousOverflow; // F5: restauration
  }

  function showPrev() {
    open((currentIndex - 1 + total) % total);
  }

  function showNext() {
    open((currentIndex + 1) % total);
  }

  imgs.forEach(function(img, index) {
    img.addEventListener('click', function() { open(index); });
  });

  closeBtn.addEventListener('click', close);

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('lightbox--open')) return;

    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'ArrowLeft') { showPrev(); return; }
    if (e.key === 'ArrowRight') { showNext(); return; }

    // F1: focus trap — Tab et Shift+Tab restent dans la lightbox
    if (e.key === 'Tab') {
      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
}

document.addEventListener('DOMContentLoaded', function() {
  initLightbox();
});
