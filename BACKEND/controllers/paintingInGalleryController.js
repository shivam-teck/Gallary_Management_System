const PaintingInGallery = require('../models/PaintingInGallery');

exports.getAllPaintingsInGalleries = async (req, res) => {
    try {
        const records = await PaintingInGallery.getAll();
        res.json(records);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addPaintingToGallery = async (req, res) => {
    try {
        const newId = await PaintingInGallery.create(req.body);
        res.status(201).json({ id: newId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.removePaintingFromGallery = async (req, res) => {
    try {
        const { galleryId, paintingId } = req.params;
        await PaintingInGallery.delete(galleryId, paintingId);
        res.json({ message: 'Painting removed from gallery' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
