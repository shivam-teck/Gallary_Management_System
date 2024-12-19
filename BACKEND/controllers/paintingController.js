const Painting = require('../models/Painting');

exports.getAllPaintings = async (req, res) => {
    try {
        const paintings = await Painting.getAll();
        res.json(paintings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getPaintingById = async (req, res) => {
    try {
        const { id } = req.params;
        const painting = await Painting.getById(id);
        if (!painting) return res.status(404).json({ error: 'Painting not found' });
        res.json(painting);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createPainting = async (req, res) => {
    try {
        const newPaintingId = await Painting.create(req.body);
        res.status(201).json({ PaintingID: newPaintingId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updatePainting = async (req, res) => {
    try {
        const { id } = req.params;
        await Painting.update(id, req.body);
        res.json({ message: 'Painting updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deletePainting = async (req, res) => {
    try {
        const { id } = req.params;
        await Painting.delete(id);
        res.json({ message: 'Painting deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
