const express = require('express');
const router = express.Router();
const biddingController = require('../controllers/biddingController');

router.get('/', biddingController.getAllBids);
router.get('/:id', biddingController.getBidById);
router.post('/', biddingController.createBid);
router.put('/:id', biddingController.updateBid);
router.delete('/:id', biddingController.deleteBid);

module.exports = router;
