const PaintingPurchase = require('../models/PaintingPurchase');

exports.getAllPurchases = async (req, res) => {
    try {
        const purchases = await PaintingPurchase.getAll();
        res.json(purchases);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getPurchaseById = async (req, res) => {
    try {
        const { id } = req.params;
        const purchase = await PaintingPurchase.getById(id);
        if (!purchase) return res.status(404).json({ error: 'Purchase not found' });
        res.json(purchase);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createPurchase = async (req, res) => {
    try {
        const newPurchaseId = await PaintingPurchase.create(req.body);
        res.status(201).json({ PurchaseID: newPurchaseId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updatePurchase = async (req, res) => {
    try {
        const { id } = req.params;
        await PaintingPurchase.update(id, req.body);
        res.json({ message: 'Purchase updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deletePurchase = async (req, res) => {
    try {
        const { id } = req.params;
        await PaintingPurchase.delete(id);
        res.json({ message: 'Purchase deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
