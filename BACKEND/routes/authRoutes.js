const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Sign-Up Route
router.post('/signup', authController.signup);

// Login Route
router.post('/login', authController.login);

module.exports = router;
