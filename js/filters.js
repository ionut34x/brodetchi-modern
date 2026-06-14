// PRODUCTS FILTERING & SORTING
let currentFilters = {
    category: 'all',
    maxPrice: 500,
    sort: 'popular'
};

let filteredProducts = [...productsData];

// Initialize filters
function initializeFilters() {
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilters.category = this.dataset.filter;
            applyFilters();
        });
    });

    // Price range slider
    const priceSlider = document.getElementById('priceRange');
    if (priceSlider) {
        priceSlider.addEventListener('input', function() {
            currentFilters.maxPrice = parseInt(this.value);
            document.getElementById('priceValue').textContent = this.value + ' MDL';
            applyFilters();
        });
    }

    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentFilters.sort = this.value;
            applyFilters();
        });
    }
}

// Apply all filters
function applyFilters() {
    // Filter by category
    if (currentFilters.category === 'all') {
        filteredProducts = [...productsData];
    } else {
        filteredProducts = productsData.filter(product => product.category === currentFilters.category);
    }

    // Filter by price
    filteredProducts = filteredProducts.filter(product => product.price <= currentFilters.maxPrice);

    // Sort products
    switch(currentFilters.sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
        default:
            filteredProducts.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    renderProducts(filteredProducts);
}

// Reset filters
function resetFilters() {
    currentFilters = {
        category: 'all',
        maxPrice: 500,
        sort: 'popular'
    };

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    document.getElementById('priceRange').value = 500;
    document.getElementById('priceValue').textContent = '500 MDL';
    document.getElementById('sortSelect').value = 'popular';

    applyFilters();
}

// Render products grid
function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');

    if (!productsGrid) return;

    if (products.length === 0) {
        productsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <span class="product-category">${getCategoryLabel(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price.toFixed(2)} MDL</span>
                    <button class="product-btn" onclick="event.stopPropagation(); openProductModal(${product.id})">Detalii</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        pain: '🍞 Pâine',
        viennoiserie: '🥐 Viennoiserie',
        cake: '🎂 Prăjituri',
        candy: '🍬 Dulciuri'
    };
    return labels[category] || category;
}

// Render locations
function renderLocations() {
    const locationsGrid = document.getElementById('locationsGrid');
    if (!locationsGrid) return;

    locationsGrid.innerHTML = locationsData.map(location => `
        <div class="location-card">
            <h3 class="location-name">📍 ${location.name}</h3>
            <p class="location-address">${location.address}</p>
            <p class="location-hours">${location.hours}</p>
            <a href="tel:${location.phone}" class="location-phone">${location.phone}</a>
        </div>
    `).join('');
}

// Product modal functions
let currentProductId = null;

function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    currentProductId = productId;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalCategory').textContent = getCategoryLabel(product.category);
    document.getElementById('modalPrice').textContent = product.price.toFixed(2) + ' MDL';

    document.getElementById('productModal').classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

function addToCart() {
    const product = productsData.find(p => p.id === currentProductId);
    if (product) {
        alert(`✅ ${product.name} a fost adăugat în coș!\n\nPreț: ${product.price.toFixed(2)} MDL`);
        closeModal();
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Newsletter form
function handleNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`✅ Mulțumim! Te-ai abonat cu: ${email}`);
    e.target.reset();
}

// Contact form
function handleContactForm(e) {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input, textarea');
    const formData = {
        name: inputs[0].value,
        email: inputs[1].value,
        phone: inputs[2].value,
        message: inputs[3].value
    };
    
    alert(`✅ Mulțumim pentru mesaj, ${formData.name}!\nTe vom contacta în curând la ${formData.email}`);
    e.target.reset();
}
