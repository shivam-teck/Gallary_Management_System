const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

// Route to get all artists
router.get('/', artistController.getAllArtists);

// Route to add a new artist
router.post('/', artistController.createArtist);

// Route to get an artist by ID
router.get('/:id', artistController.getArtistById);

// Route to update an artist by ID
router.put('/:id', artistController.updateArtist);

// Route to delete an artist by ID
router.delete('/:id', artistController.deleteArtist);

module.exports = router;
