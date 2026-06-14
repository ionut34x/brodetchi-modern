// MAIN INITIALIZATION & UTILITIES

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Brodetchi Modern Website Loaded');
    
    // Initialize filters
    initializeFilters();
    
    // Render initial products and locations
    renderProducts(filteredProducts);
    renderLocations();
    
    // Setup navigation
    setupNavigation();
    
    // Setup modal close on outside click
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
});

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            if (navLinksContainer.style.display === 'flex') {
                toggleMobileMenu();
            }
            
            // Scroll to section
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function toggleMobileMenu() {
    const navLinksContainer = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (navLinksContainer.style.display === 'flex') {
        navLinksContainer.style.display = 'none';
        hamburger.classList.remove('active');
    } else {
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '70px';
        navLinksContainer.style.left = '0';
        navLinksContainer.style.right = '0';
        navLinksContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navLinksContainer.style.borderBottom = '1px solid rgba(255, 140, 66, 0.1)';
        navLinksContainer.style.padding = '1rem 2rem';
        navLinksContainer.style.gap = '1rem';
        hamburger.classList.add('active');
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Utility: Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('ro-RO', {
        style: 'currency',
        currency: 'MDL'
    }).format(amount);
}

// Utility: Get random product
function getRandomProduct() {
    return productsData[Math.floor(Math.random() * productsData.length)];
}

// Utility: Search products
function searchProducts(query) {
    return productsData.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // CTRL/CMD + K to search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Implement search modal here if needed
    }
});

// Smooth scroll behavior polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView();
            }
        }
    });
}

console.log('✨ All features initialized successfully!');
