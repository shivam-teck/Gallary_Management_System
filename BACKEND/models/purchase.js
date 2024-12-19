const db = require('../config/db');  // Ensure this is the correct path to your DB connection file

// Get all purchases
const getAll = async () => {
    const query = 'SELECT * FROM purchases';  // Adjust the table name if needed
    const [rows] = await db.promise().query(query);
    return rows;
};

// Create a new purchase
const create = async ({ userId, paintingId, price }) => {
    const query = 'INSERT INTO purchases (userId, paintingId, price) VALUES (?, ?, ?)';
    const [result] = await db.promise().query(query, [userId, paintingId, price]);
    return result.insertId;
};

module.exports = { getAll, create };
