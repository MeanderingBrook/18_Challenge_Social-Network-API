// Requires Node Modules
const router = require("express").Router();

// Imports required Application Modules
// Defines User Management Variables referencing User Controller
const userController = require("../../controllers/userController");
const {
  getAllUsers,
  // getUserByID,
  // newUser,
  // updateUser,
  // deleteUser,
} = require("../../controllers/userController");
//const getAllUsers = require("../../controllers/userController");
//const newUser = require("../../controllers/userController");
//const updateUser = require("../../controllers/userController");
//const deleteUser = require("../../controllers/userController");

// Defines GET Route for All Users
// Note: Prefixed by, api/users
router.route("/").get(getAllUsers);

// // Defines GET Route for User by ID
// // Note: Prefixed by, api/users
// router.route("/:userID").get(getUserByID);

// // Defines POST Route for New User
// // Note: Prefixed by, api/users
// router.route("/").post(newUser);

// // Defines PUT Route for User by ID
// // Note: Prefixed by, api/users
// router.route("/userID").put(updateUser);

// // Defines DELETE Route for User by ID
// // Note: Prefixed by, api/users
// router.route("/userID").delete(deleteUser);

module.exports = router;
