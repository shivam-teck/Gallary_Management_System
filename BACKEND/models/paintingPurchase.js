const pool = require('../config/db');

class PaintingPurchase {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM PaintingPurchase');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM PaintingPurchase WHERE PurchaseID = ?', [id]);
        return rows[0];
    }

    static async create({ CustomerID, PaintingID, PurchaseDate }) {
        const [result] = await pool.query(
            'INSERT INTO PaintingPurchase (CustomerID, PaintingID, PurchaseDate) VALUES (?, ?, ?)',
            [CustomerID, PaintingID, PurchaseDate]
        );
        return result.insertId;
    }

    static async update(id, data) {
        const { CustomerID, PaintingID, PurchaseDate } = data;
        await pool.query(
            'UPDATE PaintingPurchase SET CustomerID=?, PaintingID=?, PurchaseDate=? WHERE PurchaseID=?',
            [CustomerID, PaintingID, PurchaseDate, id]
        );
    }

    static async delete(id) {
        await pool.query('DELETE FROM PaintingPurchase WHERE PurchaseID=?', [id]);
    }
}

module.exports = PaintingPurchase;
