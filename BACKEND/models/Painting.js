const pool = require('../config/db');

class Painting {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Painting');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM Painting WHERE PaintingID = ?', [id]);
        return rows[0];
    }

    static async create({ ArtistID, PaintingTitle, Year, Style, Price }) {
        const [result] = await pool.query(
            'INSERT INTO Painting (ArtistID, PaintingTitle, Year, Style, Price) VALUES (?, ?, ?, ?, ?)',
            [ArtistID, PaintingTitle, Year, Style, Price]
        );
        return result.insertId;
    }

    static async update(id, data) {
        const { ArtistID, PaintingTitle, Year, Style, Price } = data;
        await pool.query(
            'UPDATE Painting SET ArtistID=?, PaintingTitle=?, Year=?, Style=?, Price=? WHERE PaintingID=?',
            [ArtistID, PaintingTitle, Year, Style, Price, id]
        );
    }

    static async delete(id) {
        await pool.query('DELETE FROM Painting WHERE PaintingID=?', [id]);
    }
}

module.exports = Painting;
