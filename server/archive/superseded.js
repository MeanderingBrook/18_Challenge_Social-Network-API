//
// server.js

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");

// // Imports required Application Modules
// // import "./loadEnvironment.mjs";
// const routes = require("./routes");

// // Imports MongoDB Connection from Configuration file (./config/connect.js)
// const db = require("./config/connect");

// // Defines Global App Variables
// // React utlizes Port 3000 by default, Port 8080 selected for Express instead
// // Local Host: http://localhost:8080
// const PORT = process.env.PORT || 3001;

// // Executes Express Function to Create Application Object (app) using Express Framework
// const app = express();
// //app.use(express.static(path.resolve(__dirname, "/client/build")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json);
// // Body-Parser Express Middleware converts Form input for storage as JavaScript Object accessible through req.body
// //app.use(bodyParser.json());

// // CORS (Cross-Origin Resource Sharing) allows Express Backend (Port 8080) responses to React app (Port 3000)
// //app.use(cors());

// app.get("/", (req, res) => {
//   console.log("Hit Testing Route...");
//   res.json({ msg: "Testing Testing" });
// });

// app.get("/test", (req, res) => {
//   console.log("Hit Testing Route...");
//   res.json({ msg: "Testing Testing" });
// });

// // Assigns Routes to app
// app.use(routes);

// // Imports MongoDB Model
// //const { User, Thought } = require("./models");

// // Establishes connection to local MongoDB Instance through Configuration file (./config/connect.js)
// /*
// db.on(
//   "error",
//   console.error.bind(console, "Unable to connect to MongoDB Instance:")
// );
// */

// db.once("open", () => {
//   console.log("Connection established to MongoDB Instance");

//   app.listen(PORT, () => {
//     console.log(
//       `index.js Line 51: Library Manager App Express Server (Backend) is listing on Port ${PORT}.`
//     );
//   });
// });

//
// routes/index.js

// const router = require("express").Router();

// // Defines App Directory location of Routes
// const apiRoutes = require("./api");

// // Defines Routes for HTML Paths (e.g., /, /api)
// router.use("/api", apiRoutes);

// router.get("/", (req, res) => {
//   console.log("Hit Testing Route...");
//   res.json({ msg: "Testing Testing" });
// });

// router.get("/test", (req, res) => res.send("Testing Testing"));

// // Exports Routes for use in App
// module.exports = router;

// // // //
// // GET Request of MongoDB Content Data
// /*
// app.get("/cms", async (req, res) => {
//   try {
//     const data = await Content.find({});
//     // console.log("app.js Line 93", data);

//     res.json(data);
//   } catch (err) {
//     console.log("app.js Line 97: CMS Data Return Failed.");
//     res.json({ message: "app.js Line 98: CMS Data Return Failed." });
//   }
// });

// app.get("/cms/:id", (req, res) => {
//   const { id } = req.params;

//   console.log(
//     "Server index.js Line 74, CMS Post (http://localhost:3000/cms/:id) Route Sucessfully Returned"
//   );
//   res.json(contentPost);
// });

// app.post("/cms/approve/:id", (req, res) => {
//   const { id } = req.params;
//   const content = contentList.find((item) => item.id === id);

//   if (content) {
//     content.status = "Approved";
//     // Move Approved Content to end of List
//     contentList = contentList.filter((item) => item.id !== id);
//     contentList.push(content);

//     res.json({
//       message: "Content Approved.",
//     });
//   } else {
//     res.status(404).json({
//       error: "Content Not Found.",
//     });
//   }
// });

// app.put("/cms/edit/:id", (req, res) => {
//   const { id } = req.params;
//   const updatedContent = req.body;
//   const index = contentList.findIndex((item) => item.id === id);

//   if (index !== -1) {
//     contentList[index] = {
//       ...contentList[index],
//       ...updatedContent,
//     };
//   } else {
//     res.status(404).json({
//       error: "Content Not Found.",
//     });
//   }
// });

// app.post("/cms", (req, res) => {
//   const newContent = req.body;
//   newContent.status = "Pending";
//   contentList.push(newContent);

//   res.json({
//     message: "Content Successfully Added.",
//   });
// });

// // app.get("/api", (req, res) => {
// //   res.send(
// //     "index.js Line 27: Library Manager App Server has responded to API (/api) Request."
// //   );
// // });

// app.get("/", (req, res) => {
//   res.send(
//     "index.js Line 115: Library Manager App Express Server (Backend) has responded to Root (/) Request."
//   );
// });

// */

//
// userRoutes.js

// const router = require("express").Router();

// // Imports required Application Modules
// // Defines User Management Variables referencing User Controller
// const userController = require("../../controllers/userController");
// const {
//   getAllUsers,
//   // getUserByID,
//   // newUser,
//   // updateUser,
//   // deleteUser,
// } = require("../../controllers/userController");
// //const getAllUsers = require("../../controllers/userController");
// //const newUser = require("../../controllers/userController");
// //const updateUser = require("../../controllers/userController");
// //const deleteUser = require("../../controllers/userController");

// // Defines GET Route for All Users
// // Note: Prefixed by, api/users
// router.route("/").get(getAllUsers);

// // // Defines GET Route for User by ID
// // // Note: Prefixed by, api/users
// // router.route("/:userID").get(getUserByID);

// // // Defines POST Route for New User
// // // Note: Prefixed by, api/users
// // router.route("/").post(newUser);

// // // Defines PUT Route for User by ID
// // // Note: Prefixed by, api/users
// // router.route("/userID").put(updateUser);

// // // Defines DELETE Route for User by ID
// // // Note: Prefixed by, api/users
// // router.route("/userID").delete(deleteUser);

// module.exports = router;

//
// thoughtRoutes.js

// const router = require("express").Router();

// // Imports required Application Modules
// // Defines Thought Management Variables referencing Thought Controller
// const getAllThoughts = require("../../controllers/thoughtController");
// const getThoughtByID = require("../../controllers/thoughtController");
// const newThought = require("../../controllers/thoughtController");
// const updateThought = require("../../controllers/thoughtController");
// const deleteThought = require("../../controllers/thoughtController");

// // Defines GET Route for All Thoughts
// // Note: Prefixed by, api/thoughts
// //router.route("/").get(getAllThoughts);

// // Defines GET Route for Thought by ID
// // Note: Prefixed by, api/thoughts
// //router.route("/thoughtID").get(getThoughtByID);

// // Defines POST Route for New User
// // Note: Prefixed by, api/thoughts
// //router.route("/").post(newThought);

// // Defines PUT Route for User by ID
// // Note: Prefixed by, api/thoughts
// //router.route("/thoughtID").put(updateThought);

// // Defines DELETE Route for User by ID
// // Note: Prefixed by, api/users
// //router.route("/thoughtID").delete(deleteThought);

// module.exports = router;

//
// User.js

// const { Schema, model } = require("mongoose");

// const userSchema = new Schema(
//   {
//     userName: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     thoughts: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Thought",
//       },
//     ],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//     id: false,
//   }
// );

// const User = model("User", userSchema);

// module.exports = User;

//
// Thought.js

// const { Schema, model } = require("mongoose");

// const thoughtSchema = new Schema(
//   {
//     thought: {
//       type: String,
//       required: true,
//     },
//     userName: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
// );

// const Thought = model("Thought", thoughtSchema);

// module.exports = Thought;

//
// userController.js

// const { User, Thought } = require("../models");

// //const userController = {
// const userController = {
//   async getAllUsers(req, res) {
//     console.log("Fetching All Users");
//     try {
//       const allUsers = await User.find().select("-__v");

//       res.json(allUsers);
//     } catch (err) {
//       console.log(err);
//       res.json(err);
//     }
//   },
// };

// /*
// module.exports = getAllUsers = async (req, res) => {
//   try {
//     const allUsers = await User.find().select("-__v");

//     res.json(allUsers);
//   } catch (err) {
//     console.log(err);
//     res.json(err);
//   }
// };
// */

// module.exports = userController;
