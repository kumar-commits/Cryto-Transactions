// routes/priceRoutes.js
const express = require('express');
const priceController = require('../controllers/priceController');
const router = express.Router();

router.get('/summary/:address', priceController.getSummary);

module.exports = router;
