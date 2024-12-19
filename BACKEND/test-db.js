const db = require('./config/db'); // Path to your db.js file

async function testConnection() {
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS solution');
        console.log('Database connected! Test query result:', rows[0].solution);
    } catch (error) {
        console.error('Database connection failed:', error.message);
    } finally {
        process.exit(); // Ensure the script exits after testing
    }
}

testConnection();
