# Ghid de Instalare - Brodetchi Modern

## ⚡ Quick Setup (2 Minute)

### Varianta 1: Doar HTML/CSS/JS (Fără Bază de Date)

```bash
# 1. Clonează repository
git clone https://github.com/ionut34x/brodetchi-modern.git
cd brodetchi-modern

# 2. Deschide index.html
open index.html  # macOS
start index.html  # Windows
firefox index.html  # Linux
```

✅ **GATA!** Site-ul funcționează imediat cu date de test.

---

## 🗄️ Setup Complet cu Bază de Date

### Necesități:
- XAMPP/WAMP/LAMP instalat
- phpMyAdmin accesibil
- Knowledge PHP (optional)

### Step 1: Instalează Server Local

**Windows:**
1. Descarcă [XAMPP](https://www.apachefriends.org/download.html)
2. Instalează și rulează Control Panel
3. Start Apache și MySQL

**macOS:**
```bash
brew install php mysql
cd /usr/local/var/mysql
mysql.server start
```

**Linux:**
```bash
sudo apt-get install php mysql-server
sudo service mysql start
```

### Step 2: Crează Baza de Date

**Varianta A - phpMyAdmin GUI:**
1. Deschide `http://localhost/phpmyadmin`
2. Click "New" → Introduceți `brodetchi_modern` → Create
3. Selectează baza nouă
4. Mergi la SQL tab
5. Copy-paste conținutul din `database/brodetchi_schema.sql`
6. Click Execute

**Varianta B - Command Line:**
```bash
mysql -u root -p < database/brodetchi_schema.sql
```

Când ți se cere parola, apasă Enter (default fără parolă).

### Step 3: Configurează API

Editează `api/database.php` și setează:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');  # Pune parola ta dacă ai una
define('DB_NAME', 'brodetchi_modern');
```

### Step 4: Mută Folderul

**XAMPP:**
```bash
cp -r brodetchi-modern /Applications/XAMPP/htdocs/
```

**WAMP (Windows):**
```bash
Copy brodetchi-modern to C:\wamp64\www\
```

**LAMP (Linux):**
```bash
sudo cp -r brodetchi-modern /var/www/html/
```

### Step 5: Accesează Site-ul

Deschide browserul:
```
http://localhost/brodetchi-modern/
```

---

## 🔧 Troubleshooting

### "Can't connect to database"

```bash
# Check if MySQL is running
mysql -u root

# If command not found, install MySQL
mysql --version
```

### "database.php returns error"

1. Verifică credențialele în `api/database.php`
2. Testează conexiunea:

```php
<?php
$conn = new mysqli('localhost', 'root', '', 'brodetchi_modern');
if ($conn->connect_error) {
    die('Error: ' . $conn->connect_error);
}
echo 'Connected!';
?>
```

### "Images not loading"

Imagini sunt de la Unsplash (externa). Pentru imagini locale:

1. Crează folder: `images/`
2. Adaugă imagini în folder
3. Editează `js/data.js`:

```javascript
image: "images/product-name.jpg"
```

### "Filters not working"

F12 → Console. Dacă e error:

1. Asigură-te că `js/data.js` se încarcă
2. Verifică console pentru typos
3. Refresh page (Ctrl+F5)

---

## 📊 Adaugă Produse Reale

### Metoda 1: Insert Direct în Database

phpMyAdmin → Table `products` → Insert

Sau SQL:

```sql
INSERT INTO products (name, category, description, price, image_url, is_popular) VALUES
('Pâine Neagră', 'pain', 'Pâine neagră cu usturoi', 10.50, 'https://...', FALSE),
('Croissant', 'viennoiserie', 'Croissant clasic', 12.00, 'https://...', TRUE);
```

### Metoda 2: Import CSV

1. Pregătește CSV file cu coloanele: `name, category, description, price, image_url, is_popular`
2. phpMyAdmin → Import → Selectează file
3. Setează options și import

---

## 🚀 Deploy pe Web

### Recomandări de Hosting:
- **Shared Hosting**: SiteGround, Bluehost, HostGator
- **VPS**: DigitalOcean, Linode, Vultr
- **Managed**: Vercel (frontend), Heroku (backend)

### Pași Deploy:

1. Upload files via FTP
2. Crează database pe hosting
3. Importa schema SQL
4. Update `api/database.php` cu credențiale hosting
5. Setup SSL certificate (https)

---

## 📱 Test pe Diferite Dispozitive

### Desktop:
```
Crome DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)
```

### Mobile:
1. Get local IP: `ipconfig` (Windows) / `ifconfig` (Mac/Linux)
2. Pe telefon accesează: `http://YOUR_IP:8000/brodetchi-modern/`

---

## ✅ Checklist Pre-Launch

- [ ] Toate produsele sunt adăugate
- [ ] Imagini sunt locale (nu externe)
- [ ] Locații sunt actualizate
- [ ] Contact form trimite email
- [ ] Newsletter functionality functionează
- [ ] Site-ul arată bine pe mobile
- [ ] SSL certificate instalat
- [ ] Google Analytics setup
- [ ] Google Search Console verified
- [ ] Performance tested (Google PageSpeed)

---

## 🎉 Success!

Dacă totul funcționează, felicitări! 🎊

Acum puteți prezenta site-ul modern la Brodetchi! 🍞✨
