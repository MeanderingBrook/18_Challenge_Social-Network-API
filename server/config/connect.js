// const mongoose = require("mongoose");
const mongoose = require("mongoose");

// Import required Node.js Modules
// require("dotenv").config(); // Loads Environment Variables from .env File

// // Establishes connection to local MongoDB Instance using .env Reference
// mongoose.connect(process.env.MONGODB_URI, {
//   // userNewUrlParser: true,
//   // useUnifiedTopology: true,
// });

mongoose.connect("mongodb://127.0.0.1:27017/socialnetworkDB");

// Exports MongoDB Connection
module.exports = mongoose.connection;
