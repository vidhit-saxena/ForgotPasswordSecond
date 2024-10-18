const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// Route to request password reset link (checks if email exists first)
router.post('/forgot-password', passwordController.forgotPassword);

// Route to reset the password using the token
router.post('/reset-password/:token', passwordController.resetPassword);

module.exports = router;
