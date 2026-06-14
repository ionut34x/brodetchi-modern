# Brodetchi Modern - Developer Documentation

## 📚 Architecture Overview

```
Client (Browser)
    ↓
  HTML/CSS/JS
    ↓
  API Calls (XMLHttpRequest / Fetch)
    ↓
  PHP Backend (api/database.php)
    ↓
  MySQL Database
```

---

## 🏗️ JavaScript Architecture

### File Structure

```
js/
├── data.js       # Data models & sample data
├── filters.js    # Filtering & sorting logic
└── main.js       # Core functionality & navigation
```

### Execution Flow

```
1. HTML loads → DOMContentLoaded event fires
2. main.js initializes filters
3. filters.js renders products from data.js
4. Event listeners attached for interactions
5. User interactions trigger filter/sort/modal functions
```

---

## 🔧 Key Functions

### data.js

```javascript
// Sample data structure
const productsData = [
    {
        id: 1,
        name: "Product Name",
        category: "pain|viennoiserie|cake|candy",
        price: 10.50,
        description: "...",
        image: "url",
        popular: boolean
    }
];

const locationsData = [
    {
        id: 1,
        name: "Location Name",
        address: "...",
        phone: "+373...",
        hours: "..."
    }
];
```

### filters.js

```javascript
// Initialize all filter listeners
initializeFilters();

// Apply filters based on current state
applyFilters();

// Reset to default
resetFilters();

// Render products to grid
renderProducts(products);

// Render locations
renderLocations();

// Product modal operations
openProductModal(productId);
closeModal();
addToCart();
```

### main.js

```javascript
// Navigation setup
setupNavigation();

// Toggle mobile menu
toggleMobileMenu();

// Update active nav link on scroll
updateActiveNavLink();

// Format currency
formatCurrency(amount);

// Search products
searchProducts(query);
```

---

## 🎨 CSS Architecture

### styles.css

```css
:root {}          /* Color variables */
body {}           /* Base styles */
.navbar {}        /* Navigation */
.hero {}          /* Hero section */
.products-section {}  /* Products */
.filters-container {} /* Filters */
.modal {}         /* Product modal */
.footer {}        /* Footer */
@media (max-width: 768px) {} /* Responsive */
```

### animations.css

```css
@keyframes fadeIn {}      /* Fade in */
@keyframes slideInUp {}   /* Slide up */
@keyframes float {}       /* Floating animation */
@keyframes pulse {}       /* Pulse effect */
.product-card:nth-child(n) {} /* Stagger delays */
```

---

## 🔌 PHP API Reference

### Base URL
```
http://localhost/brodetchi-modern/api/database.php
```

### Endpoints

#### GET /api/database.php?action=get_products
**Returns:** All available products

```json
[
  {
    "id": 1,
    "name": "Product Name",
    "category": "pain",
    "description": "...",
    "price": "10.50",
    "image_url": "https://...",
    "is_popular": 1,
    "is_available": 1
  }
]
```

#### GET /api/database.php?action=get_by_category&category=pain
**Returns:** Products by category

#### GET /api/database.php?action=get_locations
**Returns:** All active locations

#### GET /api/database.php?action=search&q=bread
**Returns:** Products matching search query

#### POST /api/database.php
**Action: subscribe**
```
POST data: action=subscribe&email=test@example.com
Returns: {"success": true/false, "message": "..."}
```

**Action: submit_contact**
```
POST data: action=submit_contact&name=Ion&email=ion@test.com&phone=0123&message=...
Returns: {"success": true/false, "message": "..."}
```

---

## 🗄️ Database Queries

### Get Products by Category
```sql
CALL get_products_by_category('pain');
```

### Get Products by Price Range
```sql
CALL get_products_by_price(5.00, 50.00);
```

### Get Popular Products
```sql
SELECT * FROM popular_products;
```

### Get Contact Statistics
```sql
CALL get_contact_stats();
```

---

## 🔐 Security Considerations

### Currently Implemented
- ✅ Input escaping with `real_escape_string()`
- ✅ Email validation
- ✅ Required field validation
- ✅ SQL UNIQUE constraints

### Recommended Improvements

1. **Use Prepared Statements** (Better than escaping)
```php
$stmt = $conn->prepare("SELECT * FROM products WHERE category = ?");
$stmt->bind_param("s", $category);
$stmt->execute();
```

2. **Environment Variables**
```php
$db_user = getenv('DB_USER');
$db_pass = getenv('DB_PASS');
```

3. **CORS Headers**
```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
header('Access-Control-Allow-Methods: GET, POST');
```

4. **Rate Limiting**
```php
// Implement rate limiting for API calls
$_SESSION['api_calls']++;
if ($_SESSION['api_calls'] > 100) {
    die('Rate limit exceeded');
}
```

---

## 📊 Performance Optimization

### Frontend
- ✅ Minimal CSS/JS bundles
- ✅ CSS Grid for layouts
- ✅ Lazy loading support
- ⚠️ TODO: Minify CSS/JS
- ⚠️ TODO: Image optimization

### Backend
- ✅ Database indexes on frequently queried columns
- ✅ Stored procedures for complex queries
- ⚠️ TODO: Query caching
- ⚠️ TODO: Database connection pooling

### Recommendations

```javascript
// Lazy load images
const img = new Image();
img.loading = 'lazy';

// Minify and compress
// Use tools: UglifyJS, csso-cli, brotli
```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] All filters work correctly
- [ ] Price range slider functions
- [ ] Sorting by all options works
- [ ] Modal opens/closes properly
- [ ] Newsletter subscription works
- [ ] Contact form submits
- [ ] Navigation links scroll smoothly
- [ ] Mobile responsive (test at 320px, 768px, 1024px)
- [ ] All links work
- [ ] Images load

### Browser Testing

- [ ] Chrome (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest)
- [ ] Edge (Latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 🐛 Common Issues & Solutions

### Issue: Filters not persisting
**Solution:** Store filters in localStorage
```javascript
localStorage.setItem('filters', JSON.stringify(currentFilters));
const savedFilters = JSON.parse(localStorage.getItem('filters'));
```

### Issue: Slow database queries
**Solution:** Add indexes
```sql
ALTER TABLE products ADD INDEX idx_category (category);
ALTER TABLE products ADD INDEX idx_price (price);
```

### Issue: Images not loading
**Solution:** Use CDN with fallback
```javascript
img.onerror = () => {
    img.src = '/images/placeholder.png';
};
```

---

## 🚀 Future Enhancements

1. **Shopping Cart System**
   - Add to cart functionality
   - Persist cart in localStorage
   - Calculate total price

2. **User Accounts**
   - Registration/Login
   - Order history
   - Saved favorites

3. **Payment Integration**
   - Stripe/PayPal checkout
   - Invoice generation
   - Order tracking

4. **Admin Panel**
   - Product management
   - Order management
   - Analytics dashboard

5. **Advanced Features**
   - Real-time inventory
   - Push notifications
   - Recommendation engine
   - Multi-language support

---

## 📖 Code Style Guide

### JavaScript
```javascript
// Use camelCase for variables
const currentFilters = {};

// Use arrow functions
const filterProducts = (category) => { };

// Use const by default
const productList = [];

// Comment important functions
/**
 * Apply all active filters to products
 * @param {Array} products - Product array
 * @returns {Array} Filtered products
 */
```

### CSS
```css
/* Use custom properties for colors */
--primary-color: #FF8C42;

/* Group related selectors */
.button, .button-primary { }

/* Mobile-first approach */
.grid { grid-template-columns: 1fr; }
@media (min-width: 768px) {
    .grid { grid-template-columns: 2fr; }
}
```

### SQL
```sql
-- Use snake_case for columns
CREATE TABLE user_profiles (
    user_id INT,
    first_name VARCHAR(100),
    created_at TIMESTAMP
);

-- Add comments for complex queries
-- Get products with sales in last 30 days
SELECT * FROM products...
```

---

## 📞 Support

For issues or questions:
1. Check the README.md
2. Check INSTALLATION.md
3. Open an issue on GitHub

---

**Happy coding! 🚀**
