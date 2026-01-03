'use strict';

/* ==========================================================================
   D. Majumdar & Associates - Main JavaScript
   ========================================================================== */

/* ==========================================================================
   BCI Disclaimer Modal
   Required for Bar Council of India compliance
   ========================================================================== */

const Disclaimer = {
  STORAGE_KEY: 'dmajumdar_disclaimer_accepted',
  EXPIRY_DAYS: 30,

  init() {
    const overlay = document.getElementById('disclaimer-overlay');
    if (!overlay) return;

    if (this.isAccepted()) {
      overlay.hidden = true;
      return;
    }

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';

    const acceptBtn = document.getElementById('disclaimer-accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => this.accept(overlay));
    }
  },

  isAccepted() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return false;

    const { timestamp } = JSON.parse(stored);
    const expiryMs = this.EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    return Date.now() - timestamp < expiryMs;
  },

  accept(overlay) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      timestamp: Date.now()
    }));
    overlay.hidden = true;
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   Mobile Navigation
   ========================================================================== */

const MobileNav = {
  init() {
    const toggle = document.querySelector('.header__mobile-toggle');
    const nav = document.querySelector('.header__nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('header__nav--open');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('.header__nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('header__nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
};

/* ==========================================================================
   Sticky Header
   ========================================================================== */

const StickyHeader = {
  init() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollThreshold) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }
};

/* ==========================================================================
   Smooth Scroll
   ========================================================================== */

const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  }
};

/* ==========================================================================
   Lucide Icons
   ========================================================================== */

const Icons = {
  init() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
};

/* ==========================================================================
   Initialize
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  Disclaimer.init();
  MobileNav.init();
  StickyHeader.init();
  SmoothScroll.init();
  Icons.init();
});
