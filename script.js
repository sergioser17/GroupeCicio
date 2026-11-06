/* ============================================================
   GROUPE CICIO — Interactive behaviors
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById('navbar');
  const navCta = document.querySelector('.nav-cta');

  const handleScroll = () => {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);

    // Show CTA button in nav after scrolling past hero
    if (navCta) {
      navCta.style.display = scrolled ? 'inline-flex' : 'none';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load

  /* ---------- Mobile menu ---------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-menu-close');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  /* ---------- Scroll reveal ---------- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = 64; // fixed navbar height
        const targetPos = Math.round(target.getBoundingClientRect().top + window.pageYOffset - navHeight);
        window.scrollTo({ top: Math.max(0, targetPos), behavior: 'smooth' });

        // Update URL hash without causing instant jump
        history.pushState(null, '', targetId);
      }
    });
  });

  /* ---------- Gallery lightbox (simple) ---------- */
  const galleryItemBoxes = document.querySelectorAll('.gallery-item');
  galleryItemBoxes.forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) openLightbox(img.src, img.alt);
    });
  });
});

/* ---------- Global functions ---------- */

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.querySelector('#form-name').value;
  const phone = form.querySelector('#form-phone').value;
  const email = form.querySelector('#form-email').value;
  const service = form.querySelector('#form-service').value;
  const message = form.querySelector('#form-message').value;

  // Build WhatsApp message with form data
  let waMessage = `Bonjour, je suis ${name}.`;
  if (service) waMessage += `\nService souhaité : ${service}`;
  if (message) waMessage += `\n\n${message}`;
  waMessage += `\n\nTéléphone : ${phone}`;
  if (email) waMessage += `\nEmail : ${email}`;

  const encodedMessage = encodeURIComponent(waMessage);
  const waUrl = `https://wa.me/33652293931?text=${encodedMessage}`;

  // Show success feedback
  const btn = form.querySelector('#form-submit-btn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '✓ Message prêt — Redirection WhatsApp...';
  btn.style.background = '#25D366';

  setTimeout(() => {
    window.open(waUrl, '_blank');
    btn.innerHTML = originalText;
    btn.style.background = '';
    form.reset();
  }, 1200);
}

function openLightbox(src, alt) {
  // Remove existing lightbox if any
  const existing = document.querySelector('.lightbox');
  if (existing) existing.remove();

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(0,0,0,0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    animation: fadeIn 0.3s ease;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  `;

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.style.cssText = `
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 8px 48px rgba(0,0,0,0.5);
    animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  const close = document.createElement('button');
  close.innerHTML = '✕';
  close.style.cssText = `
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(255,255,255,0.1);
    border: none;
    color: #fff;
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  `;
  close.addEventListener('mouseenter', () => { close.style.background = 'rgba(255,255,255,0.2)'; });
  close.addEventListener('mouseleave', () => { close.style.background = 'rgba(255,255,255,0.1)'; });

  lightbox.appendChild(img);
  lightbox.appendChild(close);
  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';

  const closeLightbox = () => {
    lightbox.style.opacity = '0';
    lightbox.style.transition = 'opacity 0.2s';
    setTimeout(() => {
      lightbox.remove();
      document.body.style.overflow = '';
    }, 200);
  };

  lightbox.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeLightbox();
      document.removeEventListener('keydown', escHandler);
    }
  });

  // Add inline keyframes for lightbox animations
  if (!document.querySelector('#lightbox-styles')) {
    const style = document.createElement('style');
    style.id = 'lightbox-styles';
    style.textContent = `
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    `;
    document.head.appendChild(style);
  }
}
