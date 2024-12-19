const pool = require('../config/db');

class Customer {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Customer');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM Customer WHERE CustomerID = ?', [id]);
        return rows[0];
    }

    static async create({ Name, Email, PasswordHash, Phone, Cart }) {
        const [result] = await pool.query(
            'INSERT INTO Customer (Name, Email, PasswordHash, Phone, Cart) VALUES (?, ?, ?, ?, ?)',
            [Name, Email, PasswordHash, Phone, Cart]
        );
        return result.insertId;
    }

    static async update(id, data) {
        const { Name, Email, PasswordHash, Phone, Cart } = data;
        await pool.query(
            'UPDATE Customer SET Name=?, Email=?, PasswordHash=?, Phone=?, Cart=? WHERE CustomerID=?',
            [Name, Email, PasswordHash, Phone, Cart, id]
        );
    }

    static async delete(id) {
        await pool.query('DELETE FROM Customer WHERE CustomerID=?', [id]);
    }
}

module.exports = Customer;
