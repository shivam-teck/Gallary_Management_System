const db = require('../config/db');  // Assuming this is the path to your DB connection

// Get all artists
const getAll = async () => {
    const query = 'SELECT * FROM artists';  // Adjust SQL query if needed
    const [rows] = await db.promise().query(query);  // Use promise-based query for async/await
    return rows;
};

// Get artist by ID
const getById = async (id) => {
    const query = 'SELECT * FROM artists WHERE id = ?';  // Adjust SQL query if needed
    const [rows] = await db.promise().query(query, [id]);
    return rows[0];  // Return the first result (or null if not found)
};

// Create new artist
const create = async ({ name, birthplace, age, style }) => {
    const query = 'INSERT INTO artists (name, birthplace, age, style) VALUES (?, ?, ?, ?)';  // Adjust SQL query if needed
    const [result] = await db.promise().query(query, [name, birthplace, age, style]);
    return result.insertId;  // Return the new artist's ID
};

// Update artist
const update = async (id, { name, birthplace, age, style }) => {
    const query = 'UPDATE artists SET name = ?, birthplace = ?, age = ?, style = ? WHERE id = ?';  // Adjust SQL query if needed
    await db.promise().query(query, [name, birthplace, age, style, id]);
};

// Delete artist
const deleteArtist = async (id) => {
    const query = 'DELETE FROM artists WHERE id = ?';  // Adjust SQL query if needed
    await db.promise().query(query, [id]);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteArtist  // Renaming `delete` to avoid conflict with JavaScript's reserved keyword
};
