// Requires Node Modules
const router = require("express").Router();

// Defines App Directory location of Routes
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// Defines Routes for HTML Paths (e.g., /api)
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

// Exports Routes for use in App
module.exports = router;
