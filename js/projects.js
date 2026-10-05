/* ==========================================================================
   PYRAMID WATERPROOFING SERVICES & ENVADURE™
   Project Showcase Filtering, Search & Grid Rendering
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initProjectsGrid();
});

function initProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof PROJECTS_DATA === 'undefined') return;

  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('projectSearchInput');
  const countDisplay = document.getElementById('projectCountDisplay');

  let activeFilter = 'all';
  let searchQuery = '';

  function render() {
    const filtered = PROJECTS_DATA.filter(p => {
      const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
      const matchesSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${PROJECTS_DATA.length} Landmark Projects`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.5;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">No projects matched your criteria</h4>
          <p>Try refining your search keyword or selecting a different category filter.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <div class="project-card" onclick="openProjectModal('${p.id}')">
        <div class="project-img-frame">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <div class="project-img-overlay"></div>
          <span class="project-city-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${p.city}</span>
          </span>
          <span class="project-inspect-btn" title="View Technical Scope & Specs">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </span>
        </div>
        <div class="project-content">
          <div class="project-category-kicker">${p.categoryLabel}</div>
          <h3 class="project-title">${p.name}</h3>
          <div class="project-scope-meta">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            <span>${p.scope}</span>
          </div>
          <p class="project-desc">${p.summary}</p>
          <div class="project-cta-bar">
            <span class="project-cta-text">Technical Scope &amp; Specs</span>
            <span class="project-action-circle">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Filter click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      render();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      render();
    });
  }

  // Initial render
  render();
}
