<?php
/**
 * BRODETCHI MODERN - Configuration File
 * Copy this file to api/config.php and update with your settings
 */

// ===================================================
// DATABASE CONFIGURATION
// ===================================================

// Database Host (usually 'localhost')
define('DB_HOST', 'localhost');

// Database Username (default: 'root')
define('DB_USER', 'root');

// Database Password (default: empty)
define('DB_PASS', '');

// Database Name
define('DB_NAME', 'brodetchi_modern');

// Database Port (default: 3306)
define('DB_PORT', 3306);

// ===================================================
// SITE CONFIGURATION
// ===================================================

// Site Name
define('SITE_NAME', 'Brodetchi');

// Site URL (with trailing slash)
define('SITE_URL', 'http://localhost/brodetchi-modern/');

// Admin Email (for contact form submissions)
define('ADMIN_EMAIL', 'info@brodetchi.md');

// ===================================================
// EMAIL CONFIGURATION (Optional)
// ===================================================

// SMTP Host for sending emails
define('SMTP_HOST', 'smtp.gmail.com');

// SMTP Port (587 for TLS, 465 for SSL)
define('SMTP_PORT', 587);

// SMTP Username
define('SMTP_USER', 'your-email@gmail.com');

// SMTP Password
define('SMTP_PASS', 'your-app-password');

// ===================================================
// SECURITY CONFIGURATION
// ===================================================

// Enable HTTPS only (set to true in production)
define('FORCE_HTTPS', false);

// CORS Allowed Domains (comma-separated)
define('CORS_ALLOWED', 'localhost,127.0.0.1,brodetchi.md,www.brodetchi.md');

// API Rate Limit (requests per minute)
define('RATE_LIMIT', 100);

// ===================================================
// PAYMENT CONFIGURATION (Optional)
// ===================================================

// Stripe API Key (public)
define('STRIPE_PUBLIC_KEY', '');

// Stripe Secret Key
define('STRIPE_SECRET_KEY', '');

// ===================================================
// ANALYTICS CONFIGURATION (Optional)
// ===================================================

// Google Analytics ID
define('GOOGLE_ANALYTICS_ID', '');

// Google Tag Manager ID
define('GOOGLE_TAG_MANAGER_ID', '');

// ===================================================
// DEBUG MODE
// ===================================================

// Show detailed error messages (false in production)
define('DEBUG_MODE', true);

// Log errors to file
define('LOG_ERRORS', true);

// Log file path
define('LOG_FILE', dirname(__FILE__) . '/../logs/errors.log');

// ===================================================
// DEFAULT PAGINATION
// ===================================================

define('ITEMS_PER_PAGE', 12);

// ===================================================
// CACHE CONFIGURATION (Optional)
// ===================================================

// Enable caching
define('ENABLE_CACHE', false);

// Cache lifetime in seconds (1 hour = 3600)
define('CACHE_TTL', 3600);

// ===================================================
// TIMEZONE
// ===================================================

date_default_timezone_set('Europe/Bucharest');

// ===================================================
// CONNECTION HELPER FUNCTION
// ===================================================

function getDBConnection() {
    $conn = new mysqli(
        DB_HOST,
        DB_USER,
        DB_PASS,
        DB_NAME,
        DB_PORT
    );
    
    if ($conn->connect_error) {
        die(json_encode([
            'error' => 'Database connection failed',
            'message' => DEBUG_MODE ? $conn->connect_error : 'Please contact administrator'
        ]));
    }
    
    $conn->set_charset('utf8mb4');
    return $conn;
}

// ===================================================
// CORS HEADERS HELPER FUNCTION
// ===================================================

function setCORSHeaders() {
    $allowed_origins = explode(',', CORS_ALLOWED);
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    
    if (in_array($origin, $allowed_origins)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Allow-Credentials: true');
    }
}

// ===================================================
// ERROR HANDLING HELPER FUNCTION
// ===================================================

function handleError($error_message) {
    if (LOG_ERRORS && !is_dir(dirname(LOG_FILE))) {
        mkdir(dirname(LOG_FILE), 0755, true);
    }
    
    if (LOG_ERRORS) {
        file_put_contents(
            LOG_FILE,
            date('Y-m-d H:i:s') . ' - ' . $error_message . PHP_EOL,
            FILE_APPEND
        );
    }
    
    header('Content-Type: application/json');
    echo json_encode([
        'success' => false,
        'message' => DEBUG_MODE ? $error_message : 'An error occurred',
        'timestamp' => date('Y-m-d H:i:s')
    ]);
}
?>
