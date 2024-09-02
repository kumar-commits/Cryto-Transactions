// models/Transaction.js
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  address: 
  { type: String, 
    required: true, 
    index: true 
  },
  blockNumber: Number,
  timeStamp: Date,
  hash: String,
  nonce: Number,
  blockHash: String,
  transactionIndex: Number,
  from: String,
  to: String,
  value: String,
  gas: Number,
  gasPrice: String,
  isError: String,
  txreceipt_status: String,
  input: String,
  contractAddress: String,
  cumulativeGasUsed: Number,
  gasUsed: Number,
  confirmations: Number,
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
