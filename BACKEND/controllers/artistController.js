// controllers/artistController.js
const Artist = require('../models/Artist');

exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.getAll();
        res.json(artists);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getArtistById = async (req, res) => {
    try {
        const { id } = req.params;
        const artist = await Artist.getById(id);
        if (!artist) return res.status(404).json({ error: 'Artist not found' });
        res.json(artist);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createArtist = async (req, res) => {
    try {
        const newArtistId = await Artist.create(req.body);
        res.status(201).json({ ArtistID: newArtistId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateArtist = async (req, res) => {
    try {
        const { id } = req.params;
        await Artist.update(id, req.body);
        res.json({ message: 'Artist updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteArtist = async (req, res) => {
    try {
        const { id } = req.params;
        await Artist.delete(id);
        res.json({ message: 'Artist deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
