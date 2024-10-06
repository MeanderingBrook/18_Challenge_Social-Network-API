// Imports required Node.js Modules
const router = require("express").Router();

// Defines App Directory location of Routes
const apiRoutes = require("./api");

// Defines Routes for HTML Paths (e.g., /, /api)
router.use("/api", apiRoutes);

router.use("*", (req, res) => {
  return res.send("Route does not exist.");
});

// Exports Routes for use in App
module.exports = router;
