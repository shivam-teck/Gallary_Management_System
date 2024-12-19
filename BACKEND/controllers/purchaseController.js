const Purchase = require('../models/purchase');  // Assuming you have a 'purchase' model for interacting with the database

// Get all purchases
exports.getAllPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.getAll();
        res.json(purchases);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new purchase
exports.createPurchase = async (req, res) => {
    try {
        const { userId, paintingId, price } = req.body;  // Assuming you have these fields
        const newPurchaseId = await Purchase.create({ userId, paintingId, price });
        res.status(201).json({ message: 'Purchase created successfully', purchaseId: newPurchaseId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error creating purchase' });
    }
};
