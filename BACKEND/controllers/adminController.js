// adminController.js


const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');  // Assuming you have an admin model for handling database queries

// Login Admin Controller
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.getByEmail(email);
        if (!admin) return res.status(404).json({ error: "Admin not found" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: admin.id, role: admin.role }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ error: "Error logging in" });
    }
};

// Example function for dashboard route
exports.dashboard = (req, res) => {
    res.send('Welcome to the Admin Dashboard');
};

// Other admin functions as needed
