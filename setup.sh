#!/bin/bash
# Brodetchi Modern - Database Setup Script
# Usage: ./setup.sh

echo "🍞 Brodetchi Modern - Database Setup"
echo "====================================="
echo ""

# Check if MySQL is installed
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL is not installed. Please install MySQL first."
    exit 1
fi

echo "📝 Enter MySQL root password (press Enter if no password):"
read -s MYSQL_PASSWORD

echo ""
echo "🔄 Creating database and tables..."
echo ""

# Create database and import schema
if [ -z "$MYSQL_PASSWORD" ]; then
    mysql -u root < database/brodetchi_schema.sql
else
    mysql -u root -p"$MYSQL_PASSWORD" < database/brodetchi_schema.sql
fi

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Database setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Update api/database.php with your MySQL credentials"
    echo "2. Verify connection: http://localhost/brodetchi-modern/api/database.php?action=get_products"
    echo "3. Start using your website!"
    echo ""
else
    echo ""
    echo "❌ Error occurred during database setup."
    echo "Please check your MySQL credentials and try again."
    exit 1
fi
