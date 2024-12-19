const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');  // Ensure this is the correct path

// Example routes for admin actions
router.post('/login', adminController.loginAdmin);  // Make sure `loginAdmin` is defined in adminController.js
router.get('/dashboard', adminController.dashboard);  // Example for another function

// Export the router
module.exports = router;
