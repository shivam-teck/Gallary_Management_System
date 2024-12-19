const db = require('../config/db'); // Database connection

// Fetch all admins
const getAll = async () => {
    const query = 'SELECT * FROM admins';
    const [rows] = await db.promise().query(query);
    return rows;
};

// Fetch admin by ID
const getById = async (id) => {
    const query = 'SELECT * FROM admins WHERE id = ?';
    const [rows] = await db.promise().query(query, [id]);
    return rows[0];
};

// Create a new admin
const create = async ({ name, email, password }) => {
    const query = 'INSERT INTO admins (name, email, password) VALUES (?, ?, ?)';
    const [result] = await db.promise().query(query, [name, email, password]);
    return result.insertId;
};

// Update an admin's details
const update = async (id, { name, email, password }) => {
    const query = 'UPDATE admins SET name = ?, email = ?, password = ? WHERE id = ?';
    await db.promise().query(query, [name, email, password, id]);
};

// Delete an admin
const deleteAdmin = async (id) => {
    const query = 'DELETE FROM admins WHERE id = ?';
    await db.promise().query(query, [id]);
};

module.exports = { getAll, getById, create, update, delete: deleteAdmin };
