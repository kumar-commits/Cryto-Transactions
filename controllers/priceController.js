// controllers/priceController.js
const Transaction = require('../models/Transaction');
const Price = require('../models/Price');

exports.getSummary = async (req, res) => {
  const { address } = req.params;

  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  try {
    // Fetch transactions for the address
    const transactions = await Transaction.find({ address });

    if (transactions.length === 0) {
      return res.status(404).json({ error: 'No transactions found for this address' });
    }

    // Calculate total expenses
    const totalExpenses = transactions.reduce((acc, tx) => {
      const gasUsed = Number(tx.gasUsed);
      const gasPrice = Number(tx.gasPrice);
      const expense = (gasUsed * gasPrice) / 1e18; // Convert from Wei to Ether
      return acc + expense;
    }, 0);

    // Fetch the latest Ethereum price
    const latestPriceEntry = await Price.findOne().sort({ timestamp: -1 });

    if (!latestPriceEntry) {
      return res.status(500).json({ error: 'Ethereum price not available' });
    }

    res.json({
      address,
      totalExpensesInEther: totalExpenses,
      currentEthereumPriceInINR: latestPriceEntry.priceInINR,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch summary' });
  }
};
