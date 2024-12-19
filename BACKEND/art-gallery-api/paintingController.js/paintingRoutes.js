const express = require('express');
const router = express.Router();
const paintingController = require('../controllers/paintingController');

// Define routes for paintings
router.get('/', paintingController.getAllPaintings);          // Fetch all paintings
router.post('/', paintingController.createPainting);          // Add a new painting
router.get('/:id', paintingController.getPaintingById);       // Fetch a painting by ID
router.put('/:id', paintingController.updatePainting);        // Update a painting by ID
router.delete('/:id', paintingController.deletePainting);     // Delete a painting by ID

module.exports = router;
