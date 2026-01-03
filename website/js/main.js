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

    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
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
   Language Toggle (Testimonials Page)
   ========================================================================== */

const LanguageToggle = {
  init() {
    const langBtns = document.querySelectorAll('.lang-toggle__btn');
    if (!langBtns.length) return;

    const testimonialsEn = document.getElementById('testimonials-en');
    const testimonialsBn = document.getElementById('testimonials-bn');
    if (!testimonialsEn || !testimonialsBn) return;

    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        langBtns.forEach(b => {
          b.classList.remove('lang-toggle__btn--active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('lang-toggle__btn--active');
        btn.setAttribute('aria-selected', 'true');

        if (btn.dataset.lang === 'bn') {
          testimonialsEn.hidden = true;
          testimonialsBn.hidden = false;
        } else {
          testimonialsEn.hidden = false;
          testimonialsBn.hidden = true;
        }
      });
    });
  }
};

/* ==========================================================================
   Exit Intent Popup (Home Page Only)
   ========================================================================== */

const ExitIntent = {
  STORAGE_KEY: 'dmajumdar_exit_popup_shown',
  COOLDOWN_HOURS: 24,

  init() {
    if (!document.body.classList.contains('page-home')) return;
    if (this.wasRecentlyShown()) return;

    document.addEventListener('mouseout', (e) => {
      if (e.clientY < 10 && e.relatedTarget === null) {
        this.show();
      }
    });

    const closeBtn = document.getElementById('exit-popup-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hide());
    }

    const overlay = document.getElementById('exit-popup');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.hide();
      });
    }
  },

  wasRecentlyShown() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return false;

    const { timestamp } = JSON.parse(stored);
    const cooldownMs = this.COOLDOWN_HOURS * 60 * 60 * 1000;
    return Date.now() - timestamp < cooldownMs;
  },

  show() {
    const popup = document.getElementById('exit-popup');
    if (!popup || popup.dataset.shown === 'true') return;

    popup.hidden = false;
    popup.dataset.shown = 'true';
    document.body.style.overflow = 'hidden';

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      timestamp: Date.now()
    }));
  },

  hide() {
    const popup = document.getElementById('exit-popup');
    if (!popup) return;

    popup.hidden = true;
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   Testimonials Carousel
   ========================================================================== */

const TestimonialsCarousel = {
  currentIndex: 0,
  autoplayInterval: null,
  AUTOPLAY_DELAY: 5000,

  init() {
    this.track = document.querySelector('.testimonials-carousel__track');
    this.slides = document.querySelectorAll('.testimonials-carousel__slide');
    this.prevBtn = document.querySelector('.testimonials-carousel__prev');
    this.nextBtn = document.querySelector('.testimonials-carousel__next');
    this.dots = document.querySelectorAll('.testimonials-carousel__dot');

    if (!this.track || !this.slides.length) return;

    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goTo(index));
    });

    this.track.addEventListener('mouseenter', () => this.stopAutoplay());
    this.track.addEventListener('mouseleave', () => this.startAutoplay());

    this.startAutoplay();
  },

  goTo(index) {
    this.currentIndex = index;
    if (this.currentIndex < 0) this.currentIndex = this.slides.length - 1;
    if (this.currentIndex >= this.slides.length) this.currentIndex = 0;

    const offset = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${offset}%)`;

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('testimonials-carousel__dot--active', i === this.currentIndex);
    });
  },

  next() {
    this.goTo(this.currentIndex + 1);
  },

  prev() {
    this.goTo(this.currentIndex - 1);
  },

  startAutoplay() {
    this.autoplayInterval = setInterval(() => this.next(), this.AUTOPLAY_DELAY);
  },

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
};

/* ==========================================================================
   Scroll Animations
   ========================================================================== */

const ScrollAnimations = {
  init() {
    const elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('animated'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
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
  LanguageToggle.init();
  ExitIntent.init();
  TestimonialsCarousel.init();
  ScrollAnimations.init();
});
