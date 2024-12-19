const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');  // Import the controller

// Route for getting all purchases
router.get('/', purchaseController.getAllPurchases);

// Route for creating a new purchase
router.post('/', purchaseController.createPurchase);

// You can add more routes for handling updates, deletions, etc.

module.exports = router;
