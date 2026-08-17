/**
 * shared.js — Creative Learning Consultancy Limited (CLCL)
 * Injects shared navbar + footer, handles interactions
 */

/* ─── IMAGES (Unsplash CDN — load directly in browser) ─── */
const IMG = {
  hero:       'images/hero.jpg',
  about:      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=82&fit=crop',
  training:   'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=82&fit=crop',
  curriculum: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=82&fit=crop',
  stem:       'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=82&fit=crop',
  creativity: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&q=82&fit=crop',
  school:     'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=82&fit=crop',
  hijab1:     'https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&q=82&fit=crop',
  hijab2:     'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=900&q=82&fit=crop',
  programs:   'https://images.unsplash.com/photo-1544215881-8693d2621c17?w=1200&q=82&fit=crop', // Nigeria/African context
  branch:     'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=82&fit=crop',
};

/* ─── NAVBAR HTML ─── */
const NAVBAR_HTML = `
<div class="top-bar">
  <div class="container">
    <div class="top-bar-contact">
      <a href="tel:+2347080000076">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
        Zaria: +234 708 000 0076
      </a>
      <span class="tb-divider">|</span>
      <a href="tel:+13062002499">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
        Abuja: +1 306 200 2499
      </a>
      <span class="tb-divider">|</span>
      <a href="mailto:info@clclconsult.com">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        info@clclconsult.com
      </a>
    </div>
    <div class="top-bar-social">
      <a href="https://linkedin.com/in/babatunde-ruqayyah" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
  </div>
</div>

<nav class="navbar" id="main-navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="CLCL Home">
      <div class="nav-logo-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
        </svg>
      </div>
      <div class="nav-logo-text">
        <span class="nav-logo-main">CLCL</span>
        <span class="nav-logo-sub">Creative Learning Consultancy Ltd.</span>
      </div>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html" class="nav-link" data-page="home">Home</a></li>
      <li><a href="about.html" class="nav-link" data-page="about">About</a></li>
      <li><a href="services.html" class="nav-link" data-page="services">Services</a></li>
      <li><a href="programs.html" class="nav-link" data-page="programs">Programs</a></li>
      <li><a href="outcomes.html" class="nav-link" data-page="outcomes">Outcomes</a></li>
      <li><a href="contact.html" class="nav-link nav-cta" data-page="contact">Contact Us</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
    <a href="index.html" data-page="home">Home</a>
    <a href="about.html" data-page="about">About</a>
    <a href="services.html" data-page="services">Services</a>
    <a href="programs.html" data-page="programs">Programs</a>
    <a href="outcomes.html" data-page="outcomes">Outcomes</a>
    <a href="contact.html" class="nav-cta" data-page="contact">Contact Us</a>
  </nav>
</nav>
`;

/* ─── FOOTER HTML ─── */
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo-wrap">
          <div class="footer-logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
            </svg>
          </div>
          <div>
            <span class="footer-logo-text">CLCL</span>
            <span class="footer-logo-sub">Creative Learning Consultancy Ltd.</span>
          </div>
        </div>
        <p>Empowering educators and learners through creative teaching strategies, resource-based learning, and innovative educational practices across Nigeria.</p>
        <div class="footer-social">
          <a href="https://linkedin.com/in/babatunde-ruqayyah" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:info@clclconsult.com" class="footer-social-link" aria-label="Email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About CLCL</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="programs.html">Programs</a></li>
          <li><a href="outcomes.html">Outcomes</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="services.html">Teacher Training</a></li>
          <li><a href="services.html">Curriculum Support</a></li>
          <li><a href="services.html">Student Programs</a></li>
          <li><a href="services.html">Resource Development</a></li>
          <li><a href="services.html">School Consultation</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Contact Us</h5>
        <div class="footer-branch-label">Zaria, Kaduna Branch</div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span class="footer-contact-text">Zaria, Kaduna State, Nigeria</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📞</span>
          <span class="footer-contact-text"><a href="tel:+2347080000076">+234 708 000 0076</a></span>
        </div>
        <div class="footer-branch-label">Abuja Branch</div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span class="footer-contact-text">Abuja, FCT, Nigeria</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📞</span>
          <span class="footer-contact-text"><a href="tel:+13062002499">+1 306 200 2499</a></span>
        </div>
        <div class="footer-contact-item" style="margin-top:8px">
          <span class="footer-contact-icon">✉</span>
          <span class="footer-contact-text"><a href="mailto:info@clclconsult.com">info@clclconsult.com</a></span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Creative Learning Consultancy Limited (CLCL). All rights reserved.</span>
      <span>RC: Registered in Nigeria &nbsp;|&nbsp; <a href="about.html">About Us</a> &nbsp;|&nbsp; <a href="contact.html">Contact</a></span>
    </div>
  </div>
</footer>
`;

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', function () {

  // Inject navbar
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) navContainer.innerHTML = NAVBAR_HTML;

  // Inject footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = FOOTER_HTML;

  // Set active nav link
  const activePage = document.body.dataset.page || '';
  document.querySelectorAll('.nav-link[data-page], .mobile-nav a[data-page]').forEach(link => {
    if (link.dataset.page === activePage) link.classList.add('active');
  });

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  // Scroll reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) el.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });

  // Accordion
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      document.querySelectorAll('.accordion-trigger').forEach(b => {
        b.classList.remove('open');
        if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        if (body) body.classList.add('open');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

/* ─── FORM SUBMIT ─── */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  const success = document.getElementById('form-success');
  const origText = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    e.target.reset();
    btn.textContent = origText;
    btn.disabled = false;
    if (success) {
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 5000);
    }
  }, 1500);
}
