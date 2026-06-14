<?php
/**
 * BRODETCHI MODERN - PHP API for Database Operations
 * 
 * This file handles all database connections and queries.
 * Update the database credentials below with your own.
 */

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'brodetchi_modern');

// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Set charset to utf8
$conn->set_charset("utf8mb4");

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// =====================================================
// GET ALL PRODUCTS
// =====================================================
if ($_GET['action'] ?? null === 'get_products') {
    $result = $conn->query("SELECT * FROM products WHERE is_available = TRUE ORDER BY is_popular DESC, name ASC");
    $products = [];
    
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    
    header('Content-Type: application/json');
    echo json_encode($products);
    exit;
}

// =====================================================
// GET PRODUCTS BY CATEGORY
// =====================================================
if ($_GET['action'] ?? null === 'get_by_category') {
    $category = $conn->real_escape_string($_GET['category'] ?? '');
    $result = $conn->query("SELECT * FROM products WHERE category = '$category' AND is_available = TRUE ORDER BY is_popular DESC, name ASC");
    $products = [];
    
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    
    header('Content-Type: application/json');
    echo json_encode($products);
    exit;
}

// =====================================================
// GET ALL LOCATIONS
// =====================================================
if ($_GET['action'] ?? null === 'get_locations') {
    $result = $conn->query("SELECT * FROM locations WHERE is_active = TRUE ORDER BY name ASC");
    $locations = [];
    
    while ($row = $result->fetch_assoc()) {
        $locations[] = $row;
    }
    
    header('Content-Type: application/json');
    echo json_encode($locations);
    exit;
}

// =====================================================
// ADD NEWSLETTER SUBSCRIBER
// =====================================================
if ($_POST['action'] ?? null === 'subscribe') {
    $email = $conn->real_escape_string($_POST['email'] ?? '');
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Invalid email']);
        exit;
    }
    
    $sql = "INSERT INTO subscribers (email, is_active) VALUES ('$email', TRUE)
            ON DUPLICATE KEY UPDATE is_active = TRUE, subscribed_at = CURRENT_TIMESTAMP";
    
    if ($conn->query($sql) === TRUE) {
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Subscribed successfully']);
    } else {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Error: ' . $conn->error]);
    }
    exit;
}

// =====================================================
// SUBMIT CONTACT FORM
// =====================================================
if ($_POST['action'] ?? null === 'submit_contact') {
    $name = $conn->real_escape_string($_POST['name'] ?? '');
    $email = $conn->real_escape_string($_POST['email'] ?? '');
    $phone = $conn->real_escape_string($_POST['phone'] ?? '');
    $message = $conn->real_escape_string($_POST['message'] ?? '');
    
    if (empty($name) || empty($email) || empty($message)) {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit;
    }
    
    $sql = "INSERT INTO contacts (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";
    
    if ($conn->query($sql) === TRUE) {
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    } else {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Error: ' . $conn->error]);
    }
    exit;
}

// =====================================================
// SEARCH PRODUCTS
// =====================================================
if ($_GET['action'] ?? null === 'search') {
    $query = $conn->real_escape_string($_GET['q'] ?? '');
    $result = $conn->query("SELECT * FROM products WHERE (name LIKE '%$query%' OR description LIKE '%$query%') AND is_available = TRUE");
    $products = [];
    
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    
    header('Content-Type: application/json');
    echo json_encode($products);
    exit;
}

// Default response
header('Content-Type: application/json');
echo json_encode(['error' => 'Invalid action']);
$conn->close();
?>
