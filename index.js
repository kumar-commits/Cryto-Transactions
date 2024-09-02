require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const connectDB = require('./config/connectDb'); // Import the connectDB function
// index.js (continued)



const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Sample route to test if the server is running
app.get('/', (req, res) => {
  res.send('API is running...');
});
require('./scheduler/priceFetcher');
// Define your routes here
// Example: app.use('/api/transactions', require('./routes/transactionRoutes'));
// Routes
const transactionRoutes = require('./routes/transactionRoutes');
const priceRoutes = require('./routes/priceRoutes');
const summaryRoute = require('./routes/summary');
app.use('/api', transactionRoutes);
app.use('/api', priceRoutes);
app.use('/api', summaryRoute);

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
