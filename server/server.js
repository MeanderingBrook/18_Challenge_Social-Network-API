// Module 18 - Challenge: NoSQL Social Network API
// Express Server (Backend) Definition

// Initialize Server from /server
// Node: npm start
// Dev: npm run dev

// Imports required Node.js Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Imports required Application Modules
const routes = require("./routes");

// Imports MongoDB Connection from Configuration file (./config/connect.js)
const db = require("./config/connect");

// Defines Global App Variables
// React utlizes Port 3000 by default, Port 8080 selected for Express instead
// Local Host: http://localhost:8080
const PORT = process.env.PORT || 3001;

// Executes Express Function to Create Application Object (app) using Express Framework
const app = express();

// Defines Node Modules used to run App
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Assigns App Routes through reference (./routes)
app.use(routes);

db.on(
  "error",
  console.error.bind(
    console,
    "index.js Line 39: Unable to connect to MongoDB Instance:"
  )
);

// Establishes connection to local MongoDB Instance through Configuration file (./config/connect.js)
db.once("open", () => {
  console.log("index.js Line 45: Connection established to MongoDB Instance");

  app.listen(PORT, () => {
    // console.log(`API server running on port ${PORT}!`);
    console.log(
      `index.js Line 50: Library Manager App Express Server (Backend) is listing on Port ${PORT}.`
    );
  });
});
