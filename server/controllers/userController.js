// Imports required App Modules
const { User, Thought } = require("../models");

// Assigns all User Methods to 'userController' Variable
// Methods deconstructed in userRoutes.js
const userController = {
  // Defines GET Method for All Users
  // http://localhost:3001/api/users
  async getUsers(req, res) {
    try {
      const userData = await User.find().select("-__v");
      // console.log("userController Line 12: All Users:", userData);

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines GET Method for a User by ID
  // http://localhost:3001/api/users/:userId
  async getUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      console.log("userController Line 30: Selected User:", userData);

      if (!userData) {
        return res.json({
          message: "User with the submitted ID does not exist.",
        });
      }

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines POST Method for New User
  // http://localhost:3001/api/users
  async newUser(req, res) {
    // console.log("userController.js Line 48: New User Data: ", req.body);

    // let testUser = {
    //   userName: req.body.userName,
    //   emailAddress: req.body.emailAddress,
    // };

    try {
      const userData = await User.create(req.body);
      // const userData = await User.create(testUser);
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines PUT Method for existing User by ID
  // http://localhost:3001/api/users/:userId
  async updateUser(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      if (!userData) {
        return res.json({
          message: "User with the submitted ID does not exist.",
        });
      }

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines DELETE Method for existing User by ID
  // http://localhost:3001/api/users/:userId
  async deleteUser(req, res) {
    try {
      const userData = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!userData) {
        return res.json({
          message: "User with the submitted ID does not exist.",
        });
      }

      res.json({ message: "User deleted." });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines POST Method for new Friend by ID
  // http://localhost:3001/api/users/:userId/friends/:friendId
  async newFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!userData) {
        return res.json({
          message: "User with the submitted ID does not exist.",
        });
      }

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines DELETE Method for existing Friend by ID
  // http://localhost:3001/api/users/:userId/friends/:friendId
  async deleteFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!userData) {
        return res.json({
          message: "User with the submitted ID does not exist.",
        });
      }

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};

// Exports userController and all Methods as Module
module.exports = userController;
