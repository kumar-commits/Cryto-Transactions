// routes/transactionRoutes.js
const express = require('express');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

router.post('/fetch-transactions', transactionController.fetchTransactions);

module.exports = router;
