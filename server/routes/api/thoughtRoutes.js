// Requires Node Modules
const router = require("express").Router();

// Imports required Application Modules
// Defines Thought Management Variables referencing Thought Controller
const getAllThoughts = require("../../controllers/thoughtController");
const getThoughtByID = require("../../controllers/thoughtController");
const newThought = require("../../controllers/thoughtController");
const updateThought = require("../../controllers/thoughtController");
const deleteThought = require("../../controllers/thoughtController");

// Defines GET Route for All Thoughts
// Note: Prefixed by, api/thoughts
//router.route("/").get(getAllThoughts);

// Defines GET Route for Thought by ID
// Note: Prefixed by, api/thoughts
//router.route("/thoughtID").get(getThoughtByID);

// Defines POST Route for New User
// Note: Prefixed by, api/thoughts
//router.route("/").post(newThought);

// Defines PUT Route for User by ID
// Note: Prefixed by, api/thoughts
//router.route("/thoughtID").put(updateThought);

// Defines DELETE Route for User by ID
// Note: Prefixed by, api/users
//router.route("/thoughtID").delete(deleteThought);

module.exports = router;
