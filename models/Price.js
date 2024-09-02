// models/Price.js
const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  priceInINR: Number,
});

module.exports = mongoose.model('Price', PriceSchema);
