const pool = require('../config/db');

class Event {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Event');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM Event WHERE EventID = ?', [id]);
        return rows[0];
    }

    static async create({ EventName, PaintingName, EventDate, Location, Cost, ROI, BiddingDeadline }) {
        const [result] = await pool.query(
            'INSERT INTO Event (EventName, PaintingName, EventDate, Location, CreatedAt, Cost, ROI, BiddingDeadline) VALUES (?,?,?,?,NOW(),?,?,?)',
            [EventName, PaintingName, EventDate, Location, Cost, ROI, BiddingDeadline]
        );
        return result.insertId;
    }

    static async update(id, data) {
        const { EventName, PaintingName, EventDate, Location, Cost, ROI, BiddingDeadline } = data;
        await pool.query(
            'UPDATE Event SET EventName=?, PaintingName=?, EventDate=?, Location=?, Cost=?, ROI=?, BiddingDeadline=? WHERE EventID=?',
            [EventName, PaintingName, EventDate, Location, Cost, ROI, BiddingDeadline, id]
        );
    }

    static async delete(id) {
        await pool.query('DELETE FROM Event WHERE EventID=?', [id]);
    }
}

module.exports = Event;
