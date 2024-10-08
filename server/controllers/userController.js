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
      // console.log("userController Line 11: All Users:", userData);

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
      const userData = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("friends")
        .populate("thoughts");
      console.log("userController Line 27: Selected User:", userData);

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
    console.log("userController.js Line 44: New User Data: ", req.body);

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
          // runValidators: true,
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

      // BONUS: get ids of user's `thoughts` and delete them all
      await Thought.deleteMany({ _id: { $in: userData.thoughts } });
      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add friend to friend list
  async addFriend(req, res) {
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
  // remove friend from friend list
  async removeFriend(req, res) {
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
