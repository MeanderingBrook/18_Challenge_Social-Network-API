// Imports required Node.js Modules
const router = require("express").Router();

// Imports required Application Modules
// Defines Thought Management Variables referencing User Controller
// Note: Methods MUST be deconstructed in {} since they're bundled under "thoughtController"
const {
  getThoughts,
  getThought,
  newThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

// Defines GET Route for All Thoughts
// Note: Prefixed by, api/thoughts
router.route("/").get(getThoughts);

// Defines GET Route for Thought by ID
// Note: Prefixed by, api/thoughts
router.route("/:thoughtId").get(getThought);

// Defines POST Route for New Thought
// Note: Prefixed by, api/thoughts
router.route("/").post(newThought);

// Defines PUT Route for Thought by ID
// Note: Prefixed by, api/thoughts
router.route("/:thoughtId").put(updateThought);

// Defines DELETE Route for Thought by ID
// Note: Prefixed by, api/thoughts
router.route("/:thoughtId").delete(deleteThought);

// Exports Routes for use in App
module.exports = router;
