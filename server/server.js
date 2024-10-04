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
// import "./loadEnvironment.mjs";
const routes = require("./routes");

// Imports MongoDB Connection from Configuration file (./config/connect.js)
const db = require("./config/connect");

// Defines Global App Variables
// React utlizes Port 3000 by default, Port 8080 selected for Express instead
// Local Host: http://localhost:8080
const PORT = process.env.PORT || 3001;

// Executes Express Function to Create Application Object (app) using Express Framework
const app = express();
//app.use(express.static(path.resolve(__dirname, "/client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json);
// Body-Parser Express Middleware converts Form input for storage as JavaScript Object accessible through req.body
//app.use(bodyParser.json());

// CORS (Cross-Origin Resource Sharing) allows Express Backend (Port 8080) responses to React app (Port 3000)
//app.use(cors());

app.get("/", (req, res) => {
  console.log("Hit Testing Route...");
  res.json({ msg: "Testing Testing" });
});

app.get("/test", (req, res) => {
  console.log("Hit Testing Route...");
  res.json({ msg: "Testing Testing" });
});

// Assigns Routes to app
app.use(routes);

// Imports MongoDB Model
//const { User, Thought } = require("./models");

// Establishes connection to local MongoDB Instance through Configuration file (./config/connect.js)
/*
db.on(
  "error",
  console.error.bind(console, "Unable to connect to MongoDB Instance:")
);
*/
db.once("open", () => {
  console.log("Connection established to MongoDB Instance");

  app.listen(PORT, () => {
    console.log(
      `index.js Line 51: Library Manager App Express Server (Backend) is listing on Port ${PORT}.`
    );
  });
});
