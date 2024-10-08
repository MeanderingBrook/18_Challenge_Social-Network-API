// Imports required Node.js Modules
const mongoose = require("mongoose");

// Loads Environment Variables from .env File
require("dotenv").config();

// Establishes connection to local MongoDB Instance using .env Reference
mongoose.connect(process.env.MONGODB_URI, {
  // userNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Establishes connection to local MongoDB Instance through String Literal
// mongoose.connect("mongodb://127.0.0.1:27017/socialmedia");

// Exports MongoDB Connection
module.exports = mongoose.connection;
