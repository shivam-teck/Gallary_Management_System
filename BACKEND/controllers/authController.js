const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/user');  // Path to users model

// JWT Secret Key (Use a more secure key in production)
const JWT_SECRET = "your_jwt_secret_key";

// Sign-Up Controller
exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);  // Encrypt password
        const newUserId = await Users.create({ name, email, password: hashedPassword, role });
        res.status(201).json({ message: "User created", userId: newUserId });
    } catch (err) {
        res.status(500).json({ error: "Error creating user" });
    }
};

// Login Controller
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.getByEmail(email);
        if (!user) return res.status(404).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ error: "Error logging in" });
    }
};
