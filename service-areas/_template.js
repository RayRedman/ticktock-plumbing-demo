// ==========================================
// SERVICE AREA PAGE TEMPLATE ENGINE
// Canonical service area rendering logic - single source of truth
// ==========================================

(function() {
    'use strict';
    
    // ==========================================
    // GET SERVICE AREA FROM PATHNAME
    // ==========================================
    function getAreaFromPathname() {
        // Extract slug from pathname: /service-areas/austin.html -> austin
        const pathname = window.location.pathname;
        const filename = pathname.split('/').pop(); // e.g., "austin.html"
        const slug = filename.replace('.html', '');  // e.g., "austin"
        
        if (slug && slug !== '_template' && CONFIG.serviceAreas) {
            // Find by slug (priority) or id (fallback)
            const found = CONFIG.serviceAreas.find(a => 
                a.slug === slug || a.id === slug
            );
            if (found) return found;
        }
        
        // Fallback to first area
        return CONFIG.serviceAreas?.[0] || null;
    }
    
    // Current area (set on load)
    let currentArea = null;
    
    // ==========================================
    // SEO - Set page title and meta
    // ==========================================
    function setAreaSEO(area) {
        if (!area) return;
        
        // Title
        const title = area.metaTitle ||
            `${area.name} ${CONFIG.brand.trade || 'Home Services'} | ${CONFIG.brand.name}`;
        document.getElementById('page-title').textContent = title;

        // Description
        const description = area.metaDescription || area.description ||
            `Professional ${(CONFIG.brand.trade || 'home services').toLowerCase()} in ${area.name}. ${CONFIG.brand.tagline}`;
        document.getElementById('meta-description').setAttribute('content', description);
    }
    
    // ==========================================
    // HERO - Area-specific
    // ==========================================
    function renderHero() {
        const container = document.getElementById('hero');
        if (!container || !currentArea) return;
        
        // Use area image or fallback to homepage hero
        const bgImage = currentArea.image || CONFIG.hero?.backgroundImage || getImage('hero');
        
        // Trust badges for hero
        const heroBadges = CONFIG.trustBadges.slice(0, 4).map(b => `
            <div class="hero-trust-badge">
                <span class="hero-trust-icon">${getIcon(b.icon)}</span>
                <span class="hero-trust-text">${b.text}</span>
            </div>
        `).join('');
        
        // Trust strip under hero
        const trustStrip = CONFIG.hero.trustStrip && CONFIG.hero.trustStrip.enabled 
            ? `<div class="hero-trust-strip">
                <div class="container">
                    <div class="hero-trust-strip-inner">
                        ${CONFIG.hero.trustStrip.items.map(item => `<span class="hero-trust-strip-item">${item}</span>`).join('<span class="hero-trust-strip-divider">•</span>')}
                    </div>
                </div>
            </div>`
            : '';
        
        container.innerHTML = `
            <div class="hero-bg"><img src="${bgImage}" alt="${currentArea.name}"></div>
            <div class="container">
                <div class="hero-inner">
                    <div class="hero-content">
                        <div class="hero-label">${CONFIG.hero.label || 'Professional Service'}</div>
                        <h1 class="hero-headline">
                            ${currentArea.headline || `Handyman Services in ${currentArea.name}`}
                        </h1>
                        <p class="hero-subhead">${currentArea.description}</p>
                        <div class="hero-trust-row">${heroBadges}</div>
                        <div class="hero-cta">
                            <a href="#quote" class="btn btn-accent btn-lg">${CONFIG.hero.ctaPrimary.text}</a>
                            <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-outline-white btn-lg">${getIcon('phone')} ${CONFIG.brand.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
            ${trustStrip}
        `;
    }
    
    
    // ==========================================
    // AREA FEATURES - Uses services section style
    // ==========================================
    function renderAreaFeatures() {
        const container = document.getElementById('services');
        if (!container || !currentArea) return;

        // If area has no features, hide the section
        if (!currentArea.features || currentArea.features.length === 0) {
            container.style.display = 'none';
            return;
        }

        const features = currentArea.features.map(f => `
            <div class="service-card">
                <div class="service-card-content">
                    <div class="service-card-icon">${getIcon('check-circle')}</div>
                    <h3 class="service-card-title">${f}</h3>
                </div>
            </div>
        `).join('');

        // Render neighborhoods if available
        const neighborhoodsHTML = currentArea.neighborhoods && currentArea.neighborhoods.length > 0
            ? `<div class="area-neighborhoods">
                <h3 class="area-neighborhoods-title">Neighborhoods We Serve in ${currentArea.name}</h3>
                <div class="area-neighborhoods-grid">
                    ${currentArea.neighborhoods.map(n => `
                        <div class="area-neighborhood-item">
                            ${getIcon('mapPin')}
                            <span>${n}</span>
                        </div>
                    `).join('')}
                </div>
            </div>`
            : '';

        container.innerHTML = `
            <div class="container">
                <div class="services-header">
                    <div class="services-label">Why ${currentArea.name}</div>
                    <h2 class="services-title">Serving ${currentArea.name} & Surrounding Areas</h2>
                    <p class="services-subtitle">Here's what you can expect when you book with us.</p>
                </div>
                <div class="services-grid">${features}</div>
                ${neighborhoodsHTML}
            </div>
        `;
    }
    
    
    
    
    
    // ==========================================
    // INIT - Service area page initialization
    // ==========================================
    function initServiceAreaPage() {
        // Get current area from pathname
        currentArea = getAreaFromPathname();

        // Set SEO
        setAreaSEO(currentArea);

        // Init common (promo banner, top bar, header, mobile menu, schema, OG, analytics)
        initCommon('serviceArea');

        // Render page sections
        renderHero();
        renderQuoteForm({
            pageType: 'area',
            pageSlug: currentArea ? (currentArea.slug || currentArea.id) : '',
        });
        renderAreaFeatures();
        renderProcess();
        renderWhyUs();
        renderReviews();
        renderCTA();
        renderFAQ();
        renderFooter();
        renderStickyMobileCTA();
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initServiceAreaPage);
    } else {
        initServiceAreaPage();
    }
})();
