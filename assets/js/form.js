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
   Soumission Web3Forms, confirmation inline, états d'erreur
   Pattern: async/await + try/catch, < 50 lignes
   ─────────────────────────────────────────────── */

function initForm() {
  const form = document.getElementById('form-privatisation');
  const confirmation = document.getElementById('form-confirmation');
  const error = document.getElementById('form-error');
  const btn = document.getElementById('form-submit');
  if (!form || !confirmation || !error || !btn) return;

  const originalLabel = btn.textContent;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    btn.disabled = true;
    btn.setAttribute('aria-busy', 'true');
    btn.textContent = 'Envoi en cours…';
    error.hidden = true;

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', body: new FormData(form)
      });
      const data = await res.json();
      if (data.success) {
        form.hidden = true;
        confirmation.hidden = false;
        confirmation.focus();
      } else {
        throw new Error(data.message);
      }
    } catch (_err) {
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      btn.textContent = originalLabel;
      error.hidden = false;
      error.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initNewsletterForm();
  initForm();
});
