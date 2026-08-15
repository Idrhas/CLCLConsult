/* ── JavaScript for CMLC Website ── */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ── Intersection Observer for reveal animations ──
function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Add reveal class to key elements
  const revealTargets = [
    { selector: '.vm-card', delay: true },
    { selector: '.service-card', delay: true },
    { selector: '.approach-item', delay: true },
    { selector: '.audience-card', delay: true },
    { selector: '.outcome-item', delay: true },
    { selector: '.why-item', delay: true },
    { selector: '.phase', delay: true },
    { selector: '.about-objectives', delay: false },
    { selector: '.section-header', delay: false },
    { selector: '.contact-info', delay: false },
    { selector: '.contact-form', delay: false },
  ];

  revealTargets.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (delay && i < 4) {
        el.classList.add(`reveal-delay-${i + 1}`);
      }
      observer.observe(el);
    });
  });
}

// ── Counter animation for hero stats ──
function animateCounters() {
  // Nothing numeric here, just make sure hero badge pulses nicely
  const badge = document.getElementById('hero-badge');
  if (badge) {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(16px)';
    setTimeout(() => {
      badge.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)';
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }, 100);
  }
}

// ── Active nav link highlighting ──
function setupActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkEls.forEach(link => link.classList.remove('active-link'));
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active-link');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));
}

// ── Form submission handler ──
function handleFormSubmit(event) {
  event.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const successEl = document.getElementById('form-success');
  const form = document.getElementById('contact-form');

  // Animate button
  btn.disabled = true;
  const btnText = btn.querySelector('.btn-text');
  btnText.textContent = 'Sending...';
  btn.style.opacity = '0.8';

  // Simulate send (no backend)
  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    btnText.textContent = 'Send Message';
    btn.style.opacity = '1';
    successEl.classList.add('visible');

    // Hide success after 5 seconds
    setTimeout(() => {
      successEl.classList.remove('visible');
    }, 5000);
  }, 1400);
}

// ── Smooth scroll enhancement for nav links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Marquee pause on hover ──
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.parentElement.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.parentElement.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

// ── Add active-link style ──
const style = document.createElement('style');
style.textContent = `
  .nav-link.active-link {
    color: var(--orange) !important;
    background: rgba(255, 107, 53, 0.08) !important;
  }
  .hamburger.active span:nth-child(1) {
    transform: translateY(7.5px) rotate(45deg);
  }
  .hamburger.active span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .hamburger.active span:nth-child(3) {
    transform: translateY(-7.5px) rotate(-45deg);
  }
`;
document.head.appendChild(style);

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  setupRevealAnimations();
  animateCounters();
  setupActiveNavLinks();

  // Stagger hero elements
  const heroEls = [
    document.querySelector('.hero-badge'),
    document.querySelector('.hero-title'),
    document.querySelector('.hero-subtitle'),
    document.querySelector('.hero-actions'),
    document.querySelector('.hero-stats'),
  ];
  heroEls.forEach((el, i) => {
    if (el) {
      el.style.animationDelay = `${i * 0.1}s`;
    }
  });
});
