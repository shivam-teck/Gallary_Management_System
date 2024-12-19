const pool = require('../config/db');

class Gallery {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Gallery');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM Gallery WHERE GalleryID = ?', [id]);
        return rows[0];
    }

    static async create({ GalleryName, Introduction, Location }) {
        const [result] = await pool.query(
            'INSERT INTO Gallery (GalleryName, Introduction, Location, CreatedAt, UpdatedAt) VALUES (?, ?, ?, NOW(), NOW())',
            [GalleryName, Introduction, Location]
        );
        return result.insertId;
    }

    static async update(id, data) {
        const { GalleryName, Introduction, Location } = data;
        await pool.query(
            'UPDATE Gallery SET GalleryName=?, Introduction=?, Location=?, UpdatedAt=NOW() WHERE GalleryID=?',
            [GalleryName, Introduction, Location, id]
        );
    }

    static async delete(id) {
        await pool.query('DELETE FROM Gallery WHERE GalleryID=?', [id]);
    }
}

module.exports = Gallery;
