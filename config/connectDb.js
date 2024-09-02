const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    // Replace <db_password> in the MONGODB_URI with the actual password
    const dbURI = process.env.MONGODB_URI.replace('<db_password>', process.env.PASSWORD);

    await mongoose.connect(dbURI);

    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
