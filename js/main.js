/* =========================================================
   Small enhancements:
   1. Mobile-nav toggle (hamburger button)
   2. Auto-update the year in the footer
   ========================================================= */

(function () {
  'use strict';

  // --- 1. Mobile nav toggle ---
  const toggle = document.querySelector('.nav__toggle');
  const list   = document.getElementById('primary-nav');

  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const isOpen = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close the menu when a link inside it is clicked (mobile UX)
    list.addEventListener('click', (e) => {
      if (e.target.matches('a')) {
        list.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // --- 2. Year stamp in footer ---
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
