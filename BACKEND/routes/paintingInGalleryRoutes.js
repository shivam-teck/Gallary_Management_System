const express = require('express');
const router = express.Router();
const controller = require('../controllers/paintingInGalleryController');

router.get('/', controller.getAllPaintingsInGalleries);
router.post('/', controller.addPaintingToGallery);
router.delete('/:galleryId/:paintingId', controller.removePaintingFromGallery);

module.exports = router;
