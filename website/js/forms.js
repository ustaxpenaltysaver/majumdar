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
    required: 'This field is required',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    name: 'Please enter a valid name',
    minLength: (min) => `Minimum ${min} characters required`,
    maxLength: (max) => `Maximum ${max} characters allowed`
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
      error = this.messages.required;
    } else if (value) {
      if (rules.type === 'email' && !this.patterns.email.test(value)) {
        error = this.messages.email;
      } else if (rules.type === 'phone' && !this.patterns.phone.test(value)) {
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

  showSuccess(form) {
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.setAttribute('role', 'status');
    successMsg.innerHTML = `
      <i data-lucide="check-circle"></i>
      <p>Thank you for your message. We will get back to you soon.</p>
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
