// Imports required Node.js Modules
const router = require("express").Router();

// Imports required Application Modules
// Defines User Management Variables referencing User Controller
// Note: Methods MUST be deconstructed in {} since they're bundled under "userController"
const {
  getUsers,
  getUser,
  newUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Defines GET Route for All Users
// Note: Prefixed by, api/users
router.route("/").get(getUsers);

// Defines GET Route for existing User by ID
// Note: Prefixed by, api/users
router.route("/:userId").get(getUser);

// Defines POST Route for New User
// Note: Prefixed by, api/users
router.route("/").post(newUser);

// Defines PUT Route for existing User by ID
// Note: Prefixed by, api/users
router.route("/:userId").put(updateUser);

// Defines DELETE Route for User by ID
// Note: Prefixed by, api/users
router.route("/:userId").delete(deleteUser);

// Defines GET Route for User Friends
// Note: Prefixed by, api/users
// router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

// Exports Routes for use in App
module.exports = router;
