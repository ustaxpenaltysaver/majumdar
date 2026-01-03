'use strict';

/* ==========================================================================
   D. Majumdar & Associates - Form Validation & Handling
   ========================================================================== */

const FormValidator = {
  patterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[+]?[\d\s()-]{10,}$/,
    name: /^[\p{L}\s'-]{2,}$/u
  },

  messages: {
    required: 'Please fill this field',
    email: 'Please enter a valid email (e.g., name@company.com)',
    phone: 'Please enter a valid phone number (10+ digits)',
    name: 'Please enter your full name',
    select: 'Please select an option',
    minLength: (min) => `Please enter at least ${min} characters`,
    maxLength: (max) => `Please keep it under ${max} characters`,
    file: 'Please upload a valid file (PDF or Word, max 5MB)'
  },

  successMessages: {
    consultation: {
      title: 'Request Received',
      text: 'Thank you for reaching out. We will contact you within 24 hours to schedule your consultation.'
    },
    testimonial: {
      title: 'Thank You',
      text: 'We appreciate you taking the time to share your experience. Your testimonial will be reviewed and published soon.'
    },
    application: {
      title: 'Application Submitted',
      text: 'Thank you for your interest in joining our team. We will review your application and get back to you within 5 business days.'
    },
    newsletter: {
      title: 'Subscribed',
      text: 'You have been added to our mailing list. We will send you updates on legal developments and firm news.'
    },
    default: {
      title: 'Submitted Successfully',
      text: 'Thank you for your message. We will get back to you soon.'
    }
  },

  init() {
    document.querySelectorAll('form[data-validate]').forEach(form => {
      this.setupForm(form);
    });
  },

  setupForm(form) {
    form.setAttribute('novalidate', '');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.validateForm(form)) {
        this.handleSubmit(form);
      }
    });

    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('form-input--error')) {
          this.validateField(field);
        }
      });
    });
  },

  validateForm(form) {
    let isValid = true;
    form.querySelectorAll('input, textarea, select').forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    return isValid;
  },

  validateField(field) {
    const value = field.value.trim();
    const rules = this.getFieldRules(field);
    let error = null;

    if (rules.required && !value) {
      if (field.tagName === 'SELECT') {
        error = this.messages.select;
      } else {
        error = this.messages.required;
      }
    } else if (value) {
      if (rules.type === 'email' && !this.patterns.email.test(value)) {
        error = this.messages.email;
      } else if ((rules.type === 'tel' || rules.type === 'phone') && !this.patterns.phone.test(value)) {
        error = this.messages.phone;
      } else if (rules.minLength && value.length < rules.minLength) {
        error = this.messages.minLength(rules.minLength);
      } else if (rules.maxLength && value.length > rules.maxLength) {
        error = this.messages.maxLength(rules.maxLength);
      }
    }

    this.showFieldError(field, error);
    return !error;
  },

  getFieldRules(field) {
    return {
      required: field.hasAttribute('required'),
      type: field.type || field.dataset.type,
      minLength: parseInt(field.getAttribute('minlength')) || null,
      maxLength: parseInt(field.getAttribute('maxlength')) || null
    };
  },

  showFieldError(field, error) {
    const group = field.closest('.form-group');
    let errorEl = group?.querySelector('.form-error');

    if (error) {
      field.classList.add('form-input--error');
      field.setAttribute('aria-invalid', 'true');

      if (!errorEl && group) {
        errorEl = document.createElement('span');
        errorEl.className = 'form-error';
        errorEl.setAttribute('role', 'alert');
        group.appendChild(errorEl);
      }

      if (errorEl) {
        errorEl.textContent = error;
      }
    } else {
      field.classList.remove('form-input--error');
      field.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.remove();
      }
    }
  },

  handleSubmit(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Form submitted:', data);

    setTimeout(() => {
      this.showSuccess(form);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }, 1000);
  },

  getFormType(form) {
    const action = form.getAttribute('action') || '';
    const id = form.getAttribute('id') || '';
    const parentId = form.parentElement?.id || '';
    const pageUrl = window.location.pathname;

    if (pageUrl.includes('contact') || form.querySelector('[name="case_type"]')) {
      return 'consultation';
    }
    if (pageUrl.includes('testimonial') || form.querySelector('[name="testimonial"]')) {
      return 'testimonial';
    }
    if (pageUrl.includes('join') || form.querySelector('[name="position"]') || form.querySelector('[name="resume"]')) {
      return 'application';
    }
    if (form.querySelector('[name="newsletter"]') || form.classList.contains('newsletter-form')) {
      return 'newsletter';
    }
    return 'default';
  },

  showSuccess(form) {
    const formType = this.getFormType(form);
    const msg = this.successMessages[formType] || this.successMessages.default;

    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.setAttribute('role', 'status');
    successMsg.innerHTML = `
      <i data-lucide="check-circle"></i>
      <h3>${msg.title}</h3>
      <p>${msg.text}</p>
    `;

    form.reset();
    form.style.display = 'none';
    form.parentNode.insertBefore(successMsg, form.nextSibling);

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  FormValidator.init();
});
