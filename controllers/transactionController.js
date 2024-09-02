// controllers/transactionController.js
const axios = require('axios');
const Transaction = require('../models/Transaction');

exports.fetchTransactions = async (req, res) => {
  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  try {
    console.log(`Fetching transactions for address: ${address}`);


    const response = await axios.get('https://api.etherscan.io/api', {
      params: {
        module: 'account',
        action: 'txlist',
        address,
        startblock: 0,
        endblock: 99999999,
        sort: 'asc',
        apikey: process.env.ETHERSCAN_API_KEY,
      },
    });
    
    const transactions = response.data.result;
    // console.log('Fetched transactions:', transactions); 

    const transactionsWithAddress = transactions.map(tx => ({
        ...tx,
        address,
      }));
      
    
    
    // Store transactions in MongoDB and catch any errors
    await Transaction.insertMany(transactionsWithAddress, { ordered: false })
    .catch(err => {
        console.error('Error during transaction insertion:', err);
        if (err.code !== 11000) { // Ignore duplicate key errors
          throw err;
        }
      });
      console.log('Preparing to insert the following transactions:', transactionsWithAddress);

    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }

};




