'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // ========================================
  // 1. MOBILE NAVIGATION TOGGLE
  // ========================================
  const menuBtn = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuBtn && mobileNav) {
    // Toggle mobile nav on menu button click
    menuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', !isOpen);
    });

    // Close mobile nav when clicking a link inside it
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        if (mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // ========================================
  // 2. SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Handle hash on page load (for cross-page anchors)
  if (window.location.hash) {
    setTimeout(function() {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }

  // ========================================
  // 3. SCROLL REVEAL ANIMATION
  // ========================================
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  // ========================================
  // 4. FAQ ACCORDION (SINGLE OPEN)
  // ========================================
  const faqItems = document.querySelectorAll('details.faq-item');
  
  faqItems.forEach(function(item) {
    item.addEventListener('toggle', function() {
      if (this.open) {
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });

  // ========================================
  // 5. CONTACT FORM VALIDATION
  // ========================================
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Clear previous errors
      const existingErrors = contactForm.querySelectorAll('.form-error');
      existingErrors.forEach(function(err) {
        err.remove();
      });
      
      let isValid = true;
      
      // Get form fields
      const nameField = contactForm.querySelector('input[name="name"], input[id="name"]');
      const emailField = contactForm.querySelector('input[name="email"], input[id="email"], input[type="email"]');
      const phoneField = contactForm.querySelector('input[name="phone"], input[id="phone"], input[type="tel"]');
      
      // Validate name
      if (nameField) {
        const nameValue = nameField.value.trim();
        if (nameValue.length === 0) {
          showError(nameField, 'Name is required');
          isValid = false;
        }
      }
      
      // Validate email
      if (emailField) {
        const emailValue = emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue.length === 0) {
          showError(emailField, 'Email is required');
          isValid = false;
        } else if (!emailRegex.test(emailValue)) {
          showError(emailField, 'Please enter a valid email address');
          isValid = false;
        }
      }
      
      // Validate phone (optional, but validate format if provided)
      if (phoneField) {
        const phoneValue = phoneField.value.trim();
        if (phoneValue.length > 0) {
          const phoneRegex = /^[0-9\s\-\(\)\+]+$/;
          if (!phoneRegex.test(phoneValue)) {
            showError(phoneField, 'Please enter a valid phone number');
            isValid = false;
          }
        }
      }
      
      // If valid, show success message
      if (isValid) {
        contactForm.style.display = 'none';
        const successMessage = document.createElement('div');
        successMessage.style.textAlign = 'center';
        successMessage.style.padding = '2rem';
        successMessage.innerHTML = '<div style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;">â</div><p style="font-size: 1.125rem; font-weight: 500;">Thank you! We\'ll be in touch within 2 business hours.</p>';
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
      }
    });
    
    function showError(field, message) {
      const errorElement = document.createElement('p');
      errorElement.className = 'form-error';
      errorElement.textContent = message;
      errorElement.style.color = '#ef4444';
      errorElement.style.fontSize = '0.8rem';
      errorElement.style.marginTop = '4px';
      field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
  }

  // ========================================
  // 6. ANIMATED COUNTERS
  // ========================================
  const counterElements = document.querySelectorAll('.ba-tile .num[data-target]');
  
  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    counterElements.forEach(function(el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(element) {
    const targetText = element.getAttribute('data-target');
    const hasSuffix = targetText.includes('+');
    const targetValue = parseInt(targetText.replace(/\D/g, ''), 10);
    
    if (isNaN(targetValue)) return;
    
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * targetValue);
      
      element.textContent = currentValue.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = targetValue.toLocaleString() + (hasSuffix ? '+' : '');
      }
    }
    
    requestAnimationFrame(update);
  }

  // ========================================
  // 7. BACK TO TOP BUTTON
  // ========================================
  const backToTopBtn = document.createElement('button');
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.innerHTML = 'â';
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '32px';
  backToTopBtn.style.right = '32px';
  backToTopBtn.style.width = '48px';
  backToTopBtn.style.height = '48px';
  backToTopBtn.style.borderRadius = '50%';
  backToTopBtn.style.background = '#2563eb';
  backToTopBtn.style.color = 'white';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.fontSize = '24px';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  backToTopBtn.style.zIndex = '100';
  backToTopBtn.style.opacity = '0';
  backToTopBtn.style.pointerEvents = 'none';
  backToTopBtn.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(backToTopBtn);

  // Show/hide back to top button based on scroll position
  function toggleBackToTop() {
    if (window.pageYOffset > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  // Scroll to top on click
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});