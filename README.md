# Crypto Transactions API
### https://cryto-transactions.onrender.com/
This project is a Node.js-based API that allows users to fetch and store Ethereum transactions using the Etherscan API and fetch the Ethereum price periodically using the CoinGecko API. The transactions and prices are stored in a MongoDB database.

## Features

- **Fetch Transactions**: Users can provide an Ethereum address to retrieve all transactions associated with that address.
- **Store Transactions**: The fetched transactions are stored in a MongoDB database.
- **Fetch Ethereum Price**: The current price of Ethereum is fetched every 10 minutes and stored in the MongoDB database.
- **Get User Expenses**: Users can retrieve their total expenses based on their transactions.

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for building the server.
- **MongoDB**: NoSQL database for storing transactions and Ethereum prices.
- **Etherscan API**: Used to fetch Ethereum transactions.
- **CoinGecko API**: Used to fetch the current price of Ethereum.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **Axios**: Promise-based HTTP client for making API requests.
- **node-cron**: Scheduler for running tasks (fetching Ethereum price) at regular intervals.

## Project Structure

```plaintext
Crypto-Transactions
├── config
│   └── db.js                # MongoDB connection configuration
├── controllers
│   └── transactionController.js   # Controller for transaction-related logic
├── models
│   ├── Transaction.js       # Mongoose model for transactions
│   └── Price.js             # Mongoose model for Ethereum price
├── routes
│   └── transactions.js      # Route definitions for transaction-related endpoints
├── scheduler
│   └── priceFetcher.js      # Cron job to fetch Ethereum price every 10 minutes
├── .gitignore               # Git ignore file
├── index.js                 # Entry point of the application
└── README.md                # Project documentation

```
# Crypto Transactions API

This project is a Node.js-based API that allows users to fetch and store Ethereum transactions using the Etherscan API and fetch the Ethereum price periodically using the CoinGecko API. The transactions and prices are stored in a MongoDB database.

## Installation

1. **Clone the repository**:
 ```bash
   git clone https://github.com/kumar-commits/Cryto-Transactions.git
   cd Cryto-Transactions
```
2.**IInstall dependencies:**:
  ```bash
  npm install
```
3.**Create a .env file in the root directory with the following variables:**
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/crypto-transactions?retryWrites=true&w=majority
ETHERSCAN_API_KEY=your-etherscan-api-key
PORT=3000
```
4.**Replace <username> and <password> with your MongoDB Atlas credentials.**
5.**Start the server:**
```
npm start
```
6.**Access the API:**
  The API will be available at http://localhost:3000.

## API Endpoints
Fetch Transactions
- POST /api/fetch-transactions.
- Request Body: { "address": "<Ethereum address>" }
- Response: List of transactions for the given address.

Get User Expenses
- GET /summary/:address
- Request Body: { "address": "<Ethereum address>" }
- Response: Total expenses and current Ethereum price.


