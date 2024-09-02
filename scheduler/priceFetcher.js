// scheduler/priceFetcher.js
const axios = require('axios');
const cron = require('node-cron');
const Price = require('../models/Price');

const fetchEthereumPrice = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'ethereum',
        vs_currencies: 'inr',
      },
    });

    const priceInINR = response.data.ethereum.inr;

    // Save price to MongoDB
    const priceEntry = new Price({ priceInINR });
    await priceEntry.save();

    console.log(`Fetched Ethereum price: ₹${priceInINR}`);
  } catch (error) {
    console.error('Error fetching Ethereum price:', error.message);
  }
};

// Schedule to run every 10 minutes
cron.schedule('*/10 * * * *', fetchEthereumPrice);

// Initial fetch when the server starts
fetchEthereumPrice();
