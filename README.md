# 🍞 Brodetchi Modern - Website Modernizat

**Un site web modern, complex și artistic pentru Brodetchi - Brutărie și Cofetărie Moldova**

## 🎨 Caracteristici Principale

### Design & Estetică
- ✨ **Glassmorphism** - Effect de sticlă frosted cu blur și transparență
- 🎭 **Animații Smooth** - Transițiile și animațiile sunt fluide și atractive
- 📱 **Responsive Design** - Funcționează perfect pe toate dispozitivele
- 🎨 **Paletă Modernă** - Alb cu portocaliu (FF8C42) în stil minimalist
- ✅ **Accessibility** - Navigare ușoară și accesibilă

### Funcționalități
- 🔍 **Filtrare Produse** - După categorie, preț și alte criterii
- 📊 **Sortare** - După popularitate, preț, nume
- 🏪 **Locații Multiple** - Afișarea tuturor filialelor
- 📧 **Newsletter** - Sistem de abonare
- 💬 **Contact Form** - Formularul de contact cu validare
- 🛒 **Shopping Cart** - Pregătit pentru integrare
- 🎯 **Modal Produse** - Detalii complete pentru fiecare produs

---

## 📁 Structura Proiectului

```
brodetchi-modern/
├── index.html                 # Pagina principală
├── css/
│   ├── styles.css            # Stiluri principale cu glasmorphism
│   └── animations.css        # Animații și keyframes
├── js/
│   ├── data.js               # Date de produse și locații
│   ├── filters.js            # Logica filtrării și sortării
│   └── main.js               # Funcționalități principale
├── api/
│   └── database.php          # API PHP pentru baza de date
├── database/
│   └── brodetchi_schema.sql  # Schema MySQL completa
└── README.md                 # Acest fișier
```

---

## 🚀 Quick Start

### 1. **Setup Local (Fără Bază de Date)**

```bash
# Clonează repository-ul
git clone https://github.com/ionut34x/brodetchi-modern.git
cd brodetchi-modern

# Deschide index.html în browser
open index.html  # macOS
# sau
start index.html  # Windows
```

**Site-ul funcționează imediat cu date de test!**

---

### 2. **Setup cu Bază de Date (phpMyAdmin)**

#### Pas 1: Instalează XAMPP/WAMP
1. Descarcă [XAMPP](https://www.apachefriends.org/) sau [WAMP](https://www.wampserver.com/)
2. Instalează și pornește serviciile Apache și MySQL

#### Pas 2: Creează Baza de Date

1. Deschide **phpMyAdmin**: `http://localhost/phpmyadmin`
2. Creează database nou (naam: `brodetchi_modern`)
3. Selectează database-ul și mergi la tab **SQL**
4. Copiază și execută codul din `database/brodetchi_schema.sql`

**OU** - din linia de comandă:
```bash
mysql -u root -p < database/brodetchi_schema.sql
```

#### Pas 3: Configurează Conexiunea

Editează `api/database.php` și setează credențialele tale:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');        // Username MySQL
define('DB_PASS', '');             // Password MySQL
define('DB_NAME', 'brodetchi_modern');
```

#### Pas 4: Pune Proiectul în Folderul Web

```bash
# XAMPP
cp -r brodetchi-modern /Applications/XAMPP/htdocs/

# WAMP
cp -r brodetchi-modern C:\wamp64\www\
```

#### Pas 5: Accesează Site-ul
```
http://localhost/brodetchi-modern/
```

---

## 📊 Baza de Date

### Tabele Principale

#### `products` - Produse
```sql
- id (INT) - ID unic
- name (VARCHAR) - Nume produs
- category (ENUM) - pain, viennoiserie, cake, candy
- description (TEXT) - Descriere
- price (DECIMAL) - Preț în MDL
- image_url (VARCHAR) - Link imagine
- is_popular (BOOLEAN) - Marcat ca popular
- is_available (BOOLEAN) - Disponibil?
- created_at, updated_at - Timestamps
```

#### `locations` - Locații
```sql
- id (INT) - ID unic
- name (VARCHAR) - Nume locație
- address (VARCHAR) - Adresă completă
- phone (VARCHAR) - Telefon
- hours (VARCHAR) - Orele de lucru
- latitude, longitude (DECIMAL) - Coordonate GPS
- is_active (BOOLEAN) - Deschis?
```

#### `subscribers` - Newsletter
```sql
- id (INT) - ID unic
- email (VARCHAR UNIQUE) - Email abonat
- subscribed_at (TIMESTAMP) - Data abonării
- is_active (BOOLEAN) - Activ?
```

#### `contacts` - Mesaje Contact
```sql
- id (INT) - ID unic
- name, email, phone (VARCHAR) - Info contact
- message (TEXT) - Mesajul
- is_read (BOOLEAN) - Citit?
- created_at (TIMESTAMP) - Data mesajului
```

---

## 🔌 API Endpoints

### GET Requests

```bash
# Toate produsele
GET /api/database.php?action=get_products

# Produse după categorie
GET /api/database.php?action=get_by_category&category=pain

# Toate locațiile
GET /api/database.php?action=get_locations

# Caută produse
GET /api/database.php?action=search&q=pain
```

### POST Requests

```bash
# Abonare newsletter
POST /api/database.php
Data: action=subscribe&email=test@example.com

# Trimitere contact form
POST /api/database.php
Data: action=submit_contact&name=Ion&email=ion@test.com&phone=0123456&message=...
```

---

## 🎨 Customizare Design

### Schimbă Culorile

Editează `css/styles.css` - linia cu `:root`:

```css
:root {
    --primary-color: #FF8C42;      /* Portocaliu - schimbă aici */
    --primary-dark: #E67E2F;       /* Portocaliu închis */
    --bg-dark: #F8F6F1;            /* Fundal crem */
    --text-dark: #2D2D2D;          /* Text negru */
    /* ... alte culori ... */
}
```

### Schimbă Font-uri

Editează `css/styles.css` - linia `body`:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Schimbă cu font preferat */
}
```

### Ajustează Animații

Editează `css/animations.css` pentru viteze și efecte:

```css
@keyframes float {
    /* Schimbă timing și efecte */
}
```

---

## 📝 Adaugă Produse Reale

### Metoda 1: Direct în JavaScript (Test)

Editează `js/data.js`:

```javascript
const productsData = [
    {
        id: 1,
        name: "Produsul Tău",
        category: "pain",  // pain, viennoiserie, cake, candy
        price: 15.00,
        description: "Descrierea detaliată",
        image: "https://link-imagine.jpg",
        popular: true
    },
    // ... mai multe produse ...
];
```

### Metoda 2: Din Baza de Date (Production)

Modifică `index.html` pentru a încărca din API:

```javascript
// La inițializare, în loc de productsData locală:
fetch('/api/database.php?action=get_products')
    .then(response => response.json())
    .then(data => {
        productsData = data;
        renderProducts(productsData);
    });
```

---

## 🛠 Integrări Opționale

### Google Maps

Adaugă în `index.html`:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

### Sistema de Plăți (Stripe/PayPal)

```html
<script src="https://js.stripe.com/v3/"></script>
```

### Analytics (Google Analytics)

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop: > 1200px - Default */
/* Tablet: 768px - 1199px */
/* Mobile: < 767px */
```

Tot designul este optimizat pentru toate mărimile de ecran!

---

## 🔐 Securitate

### Important: Înainte de Production

1. **SQL Injection Prevention** - PHP API folosește `real_escape_string()` (implementează PDO sau prepared statements pentru mai multă securitate)

2. **HTTPS** - Sempre folosește HTTPS pe production

3. **Input Validation** - Validează toate input-urile

4. **Environment Variables** - Nu pune credențiale în cod

5. **CORS Headers** - Configurează pentru API calls

```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Content-Type: application/json');
```

---

## 📊 Performance

- ⚡ **Optimizat pentru Performanță** - Lazy loading imagini
- 🎯 **Minimal CSS/JS** - Bundle-uri mici
- 🖼 **Compresie Imagini** - Folosește format WebP dacă e posibil
- 📦 **Caching** - Implementează HTTP caching

---

## 🐛 Troubleshooting

### "Cannot connect to database"
- Verifică dacă MySQL este pornit
- Verifica credențialele în `api/database.php`
- Verifica dacă baza de date existe

### "Images not loading"
- URL-urile imaginilor sunt de la Unsplash (test)
- Schimbă cu imagini reale din folderul local

### "Filters not working"
- Deschide Developer Console (F12) și verifică errori
- Asigură-te că `js/data.js` se încarcă

### "Mobile menu not showing"
- Verifică media queries în `css/styles.css`
- Testează cu DevTools (F12 > Toggle Device Toolbar)

---

## 📈 Următorii Pași

1. ✅ Adaugă produse reale din Brodetchi
2. ✅ Schimbă imaginile cu fotografii reale
3. ✅ Configurează email pentru contact form
4. ✅ Adaugă Google Analytics
5. ✅ Deploy pe web hosting
6. ✅ Setup SSL Certificate
7. ✅ Optimizează SEO
8. ✅ Adaugă sistemul de plăți

---

## 📞 Contact & Support

**Pentru probleme sau întrebări:**
- 📧 Email: ionut34x@github.com
- 🐙 GitHub: https://github.com/ionut34x/brodetchi-modern

---

## 📄 Licență

Proiect educațional. Liber de folosit și modificat.

---

## 🎉 Gata!

**Enjoy your modern Brodetchi website! 🍞✨**

Dacă îți place, nu uita să faci un ⭐ pe GitHub!
