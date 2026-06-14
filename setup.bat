@echo off
REM Brodetchi Modern - Database Setup Script for Windows
REM Usage: setup.bat

echo.
echo 🍞 Brodetchi Modern - Database Setup
echo =====================================
echo.

REM Check if MySQL is in PATH
where mysql >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ MySQL is not found in PATH.
    echo Please ensure MySQL is installed and added to your system PATH.
    pause
    exit /b 1
)

echo 📝 Enter MySQL root password (press Enter if no password):
set /p MYSQL_PASSWORD=

echo.
echo 🔄 Creating database and tables...
echo.

REM Create database and import schema
if "%MYSQL_PASSWORD%"==" " (
    mysql -u root < database\brodetchi_schema.sql
) else (
    mysql -u root -p%MYSQL_PASSWORD% < database\brodetchi_schema.sql
)

if %errorlevel% equ 0 (
    echo.
    echo ✅ Database setup completed successfully!
    echo.
    echo Next steps:
    echo 1. Update api/database.php with your MySQL credentials
    echo 2. Verify connection: http://localhost/brodetchi-modern/api/database.php?action=get_products
    echo 3. Start using your website!
    echo.
) else (
    echo.
    echo ❌ Error occurred during database setup.
    echo Please check your MySQL credentials and try again.
)

pause
