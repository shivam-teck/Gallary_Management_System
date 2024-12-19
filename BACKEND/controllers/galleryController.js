const Gallery = require('../models/Gallery');

exports.getAllGalleries = async (req, res) => {
    try {
        const galleries = await Gallery.getAll();
        res.json(galleries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getGalleryById = async (req, res) => {
    try {
        const { id } = req.params;
        const gallery = await Gallery.getById(id);
        if (!gallery) return res.status(404).json({ error: 'Gallery not found' });
        res.json(gallery);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createGallery = async (req, res) => {
    try {
        const newGalleryId = await Gallery.create(req.body);
        res.status(201).json({ GalleryID: newGalleryId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateGallery = async (req, res) => {
    try {
        const { id } = req.params;
        await Gallery.update(id, req.body);
        res.json({ message: 'Gallery updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteGallery = async (req, res) => {
    try {
        const { id } = req.params;
        await Gallery.delete(id);
        res.json({ message: 'Gallery deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
