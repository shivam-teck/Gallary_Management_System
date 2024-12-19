const express = require('express');
const router = express.Router();
const paintingController = require('../controllers/paintingController');

router.get('/', paintingController.getAllPaintings);
router.get('/:id', paintingController.getPaintingById);
router.post('/', paintingController.createPainting);
router.put('/:id', paintingController.updatePainting);
router.delete('/:id', paintingController.deletePainting);

module.exports = router;
