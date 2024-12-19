const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const SECRET_KEY = 'your_secret_key'; // Replace with a secure environment variable in production

const userController = {
    // User Sign-Up
    signUp: async (req, res) => {
        const { NAME, EMAIL, PASSWORD, PHONE_NO, ROLE } = req.body;

        // Validate role
        if (!['Artist', 'Customer'].includes(ROLE)) {
            return res.status(400).send("Role must be 'Artist' or 'Customer'");
        }

        try {
            // Check if user already exists
            const existingUser = await User.findOne({ where: { EMAIL } });
            if (existingUser) {
                return res.status(400).send("User already exists.");
            }

            // Hash the password
            const PASSWORD_HASH = await bcrypt.hash(PASSWORD, 10);

            // Create new user
            const newUser = await User.create({
                NAME,
                EMAIL,
                PASSWORD_HASH,
                PHONE_NO,
                ROLE
            });

            res.status(201).json({
                message: "User registered successfully",
                USER_ID: newUser.USER_ID,
            });
        } catch (error) {
            res.status(500).send("Error during sign-up: " + error.message);
        }
    },

    // User Sign-In
    signIn: async (req, res) => {
        const { EMAIL, PASSWORD } = req.body;

        try {
            // Find user by email
            const user = await User.findOne({ where: { EMAIL } });
            if (!user) {
                return res.status(401).send("Invalid credentials.");
            }

            // Compare hashed passwords
            const isPasswordValid = await bcrypt.compare(PASSWORD, user.PASSWORD_HASH);
            if (!isPasswordValid) {
                return res.status(401).send("Invalid credentials.");
            }

            // Generate JWT
            const token = jwt.sign(
                { USER_ID: user.USER_ID, ROLE: user.ROLE },
                SECRET_KEY,
                { expiresIn: '1h' }
            );

            res.json({ message: "Sign-in successful", token });
        } catch (error) {
            res.status(500).send("Error during sign-in: " + error.message);
        }
    },
};

module.exports = userController;
