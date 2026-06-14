-- BRODETCHI MODERN - DATABASE STRUCTURE
-- MySQL/MariaDB Database for Product & Location Management
-- Compatible with phpMyAdmin

-- Create Database
CREATE DATABASE IF NOT EXISTS brodetchi_modern;
USE brodetchi_modern;

-- =====================================================
-- TABLE: products
-- =====================================================
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category ENUM('pain', 'viennoiserie', 'cake', 'candy') NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(500),
    is_popular BOOLEAN DEFAULT FALSE,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_price (price),
    INDEX idx_popular (is_popular)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLE: locations
-- =====================================================
CREATE TABLE IF NOT EXISTS locations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(500) NOT NULL,
    phone VARCHAR(20),
    hours VARCHAR(200),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLE: subscribers (Newsletter)
-- =====================================================
CREATE TABLE IF NOT EXISTS subscribers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLE: contacts (Contact Form Submissions)
-- =====================================================
CREATE TABLE IF NOT EXISTS contacts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_created (created_at),
    INDEX idx_read (is_read)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- SAMPLE DATA: Products
-- =====================================================
INSERT INTO products (name, category, description, price, image_url, is_popular) VALUES
('Pâine Integrală Tradițională', 'pain', 'Pâine integral făcută după rețeta tradițională cu sare și apă mineralizată', 8.50, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop', TRUE),
('Croissant Unt Clasic', 'viennoiserie', 'Croissant crocant cu unt autentic, cu 72 straturi de aluat stratificat', 12.00, 'https://images.unsplash.com/photo-1585518419759-47bde3c59ce7?w=500&h=500&fit=crop', TRUE),
('Prăjitura Ciocolată', 'cake', 'Prăjitura din ciocolată belgiană cu mousse de ciocolată neagră și ganache', 45.00, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop', TRUE),
('Briošă Coco', 'viennoiserie', 'Briošă moale cu cocos proaspăt și glazură de zahăr', 6.50, 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop', FALSE),
('Baget Țară', 'pain', 'Baget tradițional cu crustă crocantă și interior pufos', 7.00, 'https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop', FALSE),
('Tort Fructe Sezonale', 'cake', 'Tort elegant decorat cu fructe proaspete și cremă diplomat', 55.00, 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=500&fit=crop', FALSE),
('Bomboane Handmade', 'candy', 'Set de bomboane artizanale cu arome naturale și fine de ciocolată', 25.00, 'https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop', TRUE),
('Pain au Chocolat', 'viennoiserie', 'Aluat foliat cu batonașe de ciocolată neagră selectă', 5.50, 'https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop', FALSE),
('Pâine Seminţe', 'pain', 'Pâine cu seminţe diverse - floare soarelui, dovleac, in', 10.00, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop', FALSE),
('Eclair Vanilia', 'candy', 'Eclair cu cremă de vanilie și glazură de ciocolată', 8.00, 'https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop', FALSE),
('Prăjitura Afrodita', 'cake', 'Prăjitura cu iaurt grec și pistachio. Gust delicat și sofisticat', 50.00, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop', FALSE),
('Macarons Colorați', 'candy', 'Set de 6 macarons cu arome naturale - zmeură, pistachio, lămâie', 30.00, 'https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop', TRUE);

-- =====================================================
-- SAMPLE DATA: Locations
-- =====================================================
INSERT INTO locations (name, address, phone, hours, latitude, longitude) VALUES
('Brodetchi - Centru', 'Strada Pușkin 10, Chișinău', '+373 22 XXXXXX', 'Luni - Duminică: 6:00 - 21:00', 47.1599, 28.6638),
('Brodetchi - Botanica', 'Bulevardul Ștefan cel Mare 50, Chișinău', '+373 22 XXXXXX', 'Luni - Duminică: 6:00 - 21:00', 47.1700, 28.6500),
('Brodetchi - Ciocana', 'Strada Independenței 75, Chișinău', '+373 22 XXXXXX', 'Luni - Duminică: 6:00 - 20:00', 47.1800, 28.6700),
('Brodetchi - Rîșcani', 'Str. Vasile Alecsandri 35, Chișinău', '+373 22 XXXXXX', 'Luni - Duminică: 6:00 - 20:00', 47.1900, 28.6400);

-- =====================================================
-- OPTIONAL: CREATE VIEW FOR POPULAR PRODUCTS
-- =====================================================
CREATE VIEW popular_products AS
SELECT * FROM products 
WHERE is_popular = TRUE AND is_available = TRUE
ORDER BY name ASC;

-- =====================================================
-- OPTIONAL: CREATE VIEW FOR ACTIVE LOCATIONS
-- =====================================================
CREATE VIEW active_locations AS
SELECT * FROM locations 
WHERE is_active = TRUE
ORDER BY name ASC;

-- =====================================================
-- STORED PROCEDURE: Get Products by Category
-- =====================================================
DELIMITER //
CREATE PROCEDURE get_products_by_category(
    IN p_category VARCHAR(50)
)
BEGIN
    SELECT * FROM products 
    WHERE category = p_category AND is_available = TRUE
    ORDER BY is_popular DESC, name ASC;
END//
DELIMITER ;

-- =====================================================
-- STORED PROCEDURE: Get Products by Price Range
-- =====================================================
DELIMITER //
CREATE PROCEDURE get_products_by_price(
    IN p_min_price DECIMAL(10, 2),
    IN p_max_price DECIMAL(10, 2)
)
BEGIN
    SELECT * FROM products 
    WHERE price BETWEEN p_min_price AND p_max_price AND is_available = TRUE
    ORDER BY price ASC;
END//
DELIMITER ;

-- =====================================================
-- STORED PROCEDURE: Add Subscriber
-- =====================================================
DELIMITER //
CREATE PROCEDURE add_subscriber(
    IN p_email VARCHAR(255)
)
BEGIN
    INSERT INTO subscribers (email, is_active) 
    VALUES (p_email, TRUE)
    ON DUPLICATE KEY UPDATE 
    is_active = TRUE, subscribed_at = CURRENT_TIMESTAMP;
END//
DELIMITER ;

-- =====================================================
-- STORED PROCEDURE: Get Contact Statistics
-- =====================================================
DELIMITER //
CREATE PROCEDURE get_contact_stats()
BEGIN
    SELECT 
        COUNT(*) as total_contacts,
        SUM(CASE WHEN is_read = FALSE THEN 1 ELSE 0 END) as unread_count,
        DATE(created_at) as contact_date
    FROM contacts
    GROUP BY DATE(created_at)
    ORDER BY contact_date DESC;
END//
DELIMITER ;
