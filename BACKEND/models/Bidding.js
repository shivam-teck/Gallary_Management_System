const pool = require('../config/db');

class Bidding {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Bidding');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM Bidding WHERE BiddingID = ?', [id]);
        return rows[0];
    }

    static async create({ PaintingID, EventID, CustomerID, BidAmount, BidTime }) {
        const [result] = await pool.query(
            'INSERT INTO Bidding (PaintingID, EventID, CustomerID, BidAmount, BidTime) VALUES (?, ?, ?, ?, ?)',
            [PaintingID, EventID, CustomerID, BidAmount, BidTime]
        );
        return result.insertId;
    }

    static async update(id, data) {
        const { PaintingID, EventID, CustomerID, BidAmount, BidTime } = data;
        await pool.query(
            'UPDATE Bidding SET PaintingID=?, EventID=?, CustomerID=?, BidAmount=?, BidTime=? WHERE BiddingID=?',
            [PaintingID, EventID, CustomerID, BidAmount, BidTime, id]
        );
    }

    static async delete(id) {
        await pool.query('DELETE FROM Bidding WHERE BiddingID=?', [id]);
    }
}

module.exports = Bidding;
