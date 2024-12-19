const Bidding = require('../models/Bidding');

exports.getAllBids = async (req, res) => {
    try {
        const bids = await Bidding.getAll();
        res.json(bids);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getBidById = async (req, res) => {
    try {
        const { id } = req.params;
        const bid = await Bidding.getById(id);
        if (!bid) return res.status(404).json({ error: 'Bid not found' });
        res.json(bid);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createBid = async (req, res) => {
    try {
        const newBidId = await Bidding.create(req.body);
        res.status(201).json({ BiddingID: newBidId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateBid = async (req, res) => {
    try {
        const { id } = req.params;
        await Bidding.update(id, req.body);
        res.json({ message: 'Bid updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteBid = async (req, res) => {
    try {
        const { id } = req.params;
        await Bidding.delete(id);
        res.json({ message: 'Bid deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
