const Payment = require('../models/Payment');

exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.getAll();
        res.json(payments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getPaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.getById(id);
        if (!payment) return res.status(404).json({ error: 'Payment not found' });
        res.json(payment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createPayment = async (req, res) => {
    try {
        const newPaymentId = await Payment.create(req.body);
        res.status(201).json({ PaymentID: newPaymentId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        await Payment.update(id, req.body);
        res.json({ message: 'Payment updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deletePayment = async (req, res) => {
    try {
        const { id } = req.params;
        await Payment.delete(id);
        res.json({ message: 'Payment deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
