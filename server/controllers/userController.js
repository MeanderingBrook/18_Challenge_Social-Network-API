// Imports required App Modules
const { User, Thought } = require("../models");

//const userController = {
const userController = {
  async getAllUsers(req, res) {
    console.log("Fetching All Users");
    try {
      const allUsers = await User.find().select("-__v");

      res.json(allUsers);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};

/*
module.exports = getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().select("-__v");

    res.json(allUsers);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
*/

module.exports = userController;
