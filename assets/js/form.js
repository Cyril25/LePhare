// Formulaires — Le Phare de Malbuisson
// Pattern: initXxx() + DOMContentLoaded unique
// Vanilla ES2020+, async/await — zéro librairie

/* ── NEWSLETTER — Phase 1 Teaser ───────────────
   Gère soumission email vers Web3Forms et confirmation inline
   ─────────────────────────────────────────────── */

function initNewsletterForm() {
  const form = document.getElementById('form-newsletter');
  const confirmation = document.getElementById('newsletter-confirmation');
  if (!form || !confirmation) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.setAttribute('aria-busy', 'true');
    btn.textContent = 'Envoi…';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', body: new FormData(form)
      });
      const data = await res.json();
      if (data.success) {
        form.style.display = 'none';
        confirmation.removeAttribute('hidden');
        confirmation.focus();
      } else { throw new Error(data.message); }
    } catch (err) {
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      btn.textContent = 'Être informé';
    }
  });
}

/* ── PRIVATISATION — Story 5.2 ─────────────────
   TODO Story 5.2 : implémenter soumission Web3Forms
   + confirmation inline + états d'erreur
   ─────────────────────────────────────────────── */

function initForm() {
  // TODO Story 5.2 : implémenter soumission Web3Forms + confirmation inline
}

document.addEventListener('DOMContentLoaded', function() {
  initNewsletterForm();
  initForm();
});
