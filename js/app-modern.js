// Product data with modal support
const products = [
    {
        id: 1,
        name: 'Pâine Integrală Tradițională',
        description: 'Coaptă zilnic cu ingrediente 100% naturale, fără conservanți. Rețetă tradițională transmisă din generație în generație.',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop',
        badge: 'popular'
    },
    {
        id: 2,
        name: 'Croissant Unt Clasic',
        description: '72 straturi de aluat finuț cu unt de calitate superioară. Crocant pe de afară, moale pe de inăuntru.',
        price: 12.00,
        image: 'https://images.unsplash.com/photo-1585518419759-47bde3c59ce7?w=600&h=600&fit=crop',
        badge: 'new'
    },
    {
        id: 3,
        name: 'Prăjitura Ciocolată Belgă',
        description: 'Mousse de ciocolat negră de calitate superioară cu ganache velvety. O alegere perfectă pentru ocazii speciale.',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop',
        badge: 'bestseller'
    },
    {
        id: 4,
        name: 'Briošă Coco Moale',
        description: 'Briošă fragezită cu cocos proaspăt și glazură de zahăr. Perfect pentru micul dejun.',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=600&fit=crop',
        badge: null
    },
    {
        id: 5,
        name: 'Pain au Chocolat',
        description: 'Aluat foliat cu batonașe de ciocolat selectată. O combinare perfectă de texturile și gustul.',
        price: 5.50,
        image: 'https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=600&h=600&fit=crop',
        badge: null
    }
];

// Open product modal
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = product.price.toFixed(2) + ' MDL';
    
    document.getElementById('productModal').classList.add('active');
}

// Close product modal
function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

// Close modal on outside click
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            link.classList.add('active');
        });
    });

    // Scroll animation for elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.featured-card, .testimonial-card, .location-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add to cart
function addToCart() {
    alert('✅ Produs adăugat în coș!\n\nOptiunea de plată va fi disponibilă curand.');
    closeModal();
}
