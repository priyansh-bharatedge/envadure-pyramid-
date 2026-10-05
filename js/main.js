/* ==========================================================================
   PYRAMID WATERPROOFING SERVICES & ENVADURE™
   Global Site Scripts & Interactive Behaviors
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStatsCounters();
  init7DMatrix();
  initModalHandlers();
  highlightActiveNav();
  initExecutiveHub();
  initQuickAuditForm();
  initStickyConversionBar();
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('active');
      const isExpanded = drawer.classList.contains('active');
      menuBtn.setAttribute('aria-expanded', isExpanded);
      menuBtn.innerHTML = isExpanded 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Close on navigation click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    });
  }
}

/* Highlight Current Active Nav Link */
function highlightActiveNav() {
  let currentPath = decodeURIComponent(window.location.pathname.split('/').pop().split('?')[0].split('#')[0]);
  if (!currentPath || currentPath === '') currentPath = 'index.html';
  
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-drawer .nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* Animated Statistics Numbers */
function initStatsCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        if (!isNaN(target)) {
          animateCount(el, target, prefix, suffix);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  statNumbers.forEach(num => observer.observe(num));
}

function animateCount(element, target, prefix, suffix) {
  let current = 0;
  const duration = 1600;
  const stepTime = 25;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.innerHTML = `${prefix}${Math.floor(current).toLocaleString()}<span>${suffix}</span>`;
  }, stepTime);
}

/* 7-Dimensional Matrix Interactive Switcher */
function init7DMatrix() {
  const navButtons = document.querySelectorAll('.matrix-nav-btn');
  const panel = document.getElementById('matrixPanel');
  if (!navButtons.length || !panel || typeof SEVEN_D_MATRIX_DATA === 'undefined') return;

  function renderDimension(dimId) {
    const data = SEVEN_D_MATRIX_DATA.find(d => d.id === dimId) || SEVEN_D_MATRIX_DATA[0];
    panel.innerHTML = `
      <div class="matrix-panel-header">
        <div class="matrix-step-badge">Dimension 0${data.num} of 07</div>
        <h3 class="matrix-panel-title">${data.title}</h3>
        <p class="matrix-panel-desc">Scientific building envelope engineering to ensure long-term structural integrity and zero water migration.</p>
      </div>
      <div class="matrix-two-col">
        <div class="matrix-info-block">
          <div class="info-block-title science-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0"></path>
            </svg>
            The Building Science
          </div>
          <p class="info-block-text">${data.science}</p>
        </div>
        <div class="matrix-info-block">
          <div class="info-block-title spec-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            The Specification Impact
          </div>
          <p class="info-block-text">${data.specImpact}</p>
        </div>
      </div>
    `;
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDimension(btn.getAttribute('data-dim'));
    });
  });

  // Initial render
  renderDimension('dim-1');
}

/* Global Modal System */
function initModalHandlers() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal());
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  if (!modal || typeof PROJECTS_DATA === 'undefined') return;

  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  document.getElementById('modalImg').src = project.img;
  document.getElementById('modalImg').alt = project.name;
  document.getElementById('modalCategory').textContent = project.categoryLabel;
  document.getElementById('modalTitle').textContent = project.name;
  document.getElementById('modalCity').textContent = project.city;
  document.getElementById('modalDesc').textContent = project.summary;
  document.getElementById('modalScope').textContent = project.scope;
  document.getElementById('modalSpecs').textContent = project.specs;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* Executive Intelligence Hub Tabs Switcher */
function initExecutiveHub() {
  const tabBtns = document.querySelectorAll('.exec-tab-btn');
  const tabPanels = document.querySelectorAll('.exec-tab-panel');
  if (!tabBtns.length || !tabPanels.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(targetTab);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

/* Quick Pre-Tender Audit Form Handler */
function initQuickAuditForm() {
  const form = document.getElementById('quickAuditForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('auditName')?.value.trim();
    const phone = document.getElementById('auditPhone')?.value.trim();
    const type = document.getElementById('auditType')?.value;
    const stage = document.getElementById('auditStage')?.value;

    if (!name || !phone) {
      alert('Please provide your name and phone/WhatsApp number so Mehul Parikh\'s advisory desk can connect with you.');
      return;
    }

    const message = `Hello Mehul Parikh, I would like to request a Pre-Tender Technical Specification Audit.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Contact:* ${encodeURIComponent(phone)}%0A*Project Type:* ${encodeURIComponent(type || 'Not specified')}%0A*Project Stage:* ${encodeURIComponent(stage || 'Not specified')}`;

    const formBox = form.closest('.audit-form-box');
    if (formBox) {
      formBox.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 0.5rem; color: #ffffff;">
          <div style="width: 56px; height: 56px; background: rgba(45, 212, 191, 0.15); border: 1px solid #2dd4bf; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem; color: #ffffff;">Audit Request Received</h3>
          <p style="font-size: 0.925rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 1.5rem;">
            Thank you, <strong>${name}</strong>. Mehul Parikh's senior building envelope engineering team will review your project parameters and contact you at <strong>${phone}</strong> within 2 business hours.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="https://wa.me/919867524600?text=${message}" target="_blank" rel="noopener" class="btn btn-secondary" style="justify-content: center; background: #25d366; border-color: #25d366; color: #ffffff;">
              <span>Accelerate via Direct WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <button onclick="location.reload()" class="btn btn-outline" style="justify-content: center; border-color: rgba(255, 255, 255, 0.2); color: #94a3b8; font-size: 0.85rem;">Submit Another Request</button>
          </div>
        </div>
      `;
    }
  });
}

/* Sticky Bottom Conversion Bar Reveal on Scroll */
function initStickyConversionBar() {
  const stickyBar = document.getElementById('stickyConversionBar');
  if (!stickyBar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  }, { passive: true });
}

