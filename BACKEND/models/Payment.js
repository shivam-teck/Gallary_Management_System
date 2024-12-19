const pool = require('../config/db');

class Payment {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Payment');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM Payment WHERE PaymentID = ?', [id]);
        return rows[0];
    }

    static async create({ CustomerID, PaintingID, Amount, PaymentMethod, PaymentStatus, PaymentDate, TransactionID, CustomerName }) {
        const [result] = await pool.query(
            'INSERT INTO Payment (CustomerID, PaintingID, Amount, PaymentMethod, PaymentStatus, PaymentDate, TransactionID, CustomerName) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [CustomerID, PaintingID, Amount, PaymentMethod, PaymentStatus, PaymentDate, TransactionID, CustomerName]
        );
        return result.insertId;
    }

    static async update(id, data) {
        const { CustomerID, PaintingID, Amount, PaymentMethod, PaymentStatus, PaymentDate, TransactionID, CustomerName } = data;
        await pool.query(
            'UPDATE Payment SET CustomerID=?, PaintingID=?, Amount=?, PaymentMethod=?, PaymentStatus=?, PaymentDate=?, TransactionID=?, CustomerName=? WHERE PaymentID=?',
            [CustomerID, PaintingID, Amount, PaymentMethod, PaymentStatus, PaymentDate, TransactionID, CustomerName, id]
        );
    }

    static async delete(id) {
        await pool.query('DELETE FROM Payment WHERE PaymentID=?', [id]);
    }
}

module.exports = Payment;
