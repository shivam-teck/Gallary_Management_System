const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User Sign-Up
router.post('/signup', userController.signUp);

// User Sign-In
router.post('/signin', userController.signIn);

module.exports = router;
