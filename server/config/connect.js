// Imports required Node.js Modules
const mongoose = require("mongoose");

// Loads Environment Variables from .env File
require("dotenv").config();

// Establishes connection to local MongoDB Instance using .env Reference
mongoose.connect(process.env.MONGODB_URI, {
  // userNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Exports MongoDB Connection
module.exports = mongoose.connection;
