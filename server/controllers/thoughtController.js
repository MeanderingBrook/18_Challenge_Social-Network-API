// Imports required App Modules
const { Thought, User } = require("../models");

// Assigns all Thought Methods to 'thoughtController' Variable
// Methods deconstructed in thoughtRoutes.js
const thoughtController = {
  // Defines GET Method for All Thoughts
  // http://localhost:3001/api/thoughts
  async getThoughts(req, res) {
    try {
      const thoughtData = await Thought.find().sort({ createdAt: -1 });
      // console.log("thoughtController Line 11: All Thoughts:", thoughtData);

      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines GET Method for a Thought by ID
  // http://localhost:3001/api/thoughts/:thoughtId
  async getThought(req, res) {
    try {
      const thoughtData = await Thought.findOne({
        _id: req.params.thoughtId,
      });

      if (!thoughtData) {
        return res.json({
          message: "Thought with the submitted ID does not exist.",
        });
      }

      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines POST Method for New Thought
  // http://localhost:3001/api/thoughts
  async newThought(req, res) {
    try {
      const thoughtData = await Thought.create(req.body);

      const userData = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thoughtData._id } },
        { new: true }
      );

      if (!userData) {
        return res.json({
          message: "Thought is not associated with a User.",
        });
      }

      // res.json({ message: "New Thought created." });
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines PUT Method for existing Thought by ID
  // http://localhost:3001/api/thoughts/:thoughtId
  async updateThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thoughtData) {
        return res.json({
          message: "Thought with the submitted ID does not exist.",
        });
      }

      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // Defines DELETE Method for existing Thought by ID
  // http://localhost:3001/api/thoughts/:thoughtId
  async deleteThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thoughtData) {
        return res.json({
          message: "Thought with the submitted ID does not exist.",
        });
      }

      // Deletes Thought from associated User
      const userData = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if (!userData) {
        return res.json({
          message: "Thought is not associated with a User.",
        });
      }

      res.json({ message: "Thought was deleted." });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  // // // // //
  // // add a reaction to a thought
  // async addReaction(req, res) {
  //   try {
  //     const thoughtData = await Thought.findOneAndUpdate(
  //       { _id: req.params.thoughtId },
  //       { $addToSet: { reactions: req.body } },
  //       { runValidators: true, new: true }
  //     );

  //     if (!thoughtData) {
  //       return res.status(404).json({ message: "No thought with this id!" });
  //     }

  //     res.json(thoughtData);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // },
  // // remove reaction from a thought
  // async removeReaction(req, res) {
  //   try {
  //     const thoughtData = await Thought.findOneAndUpdate(
  //       { _id: req.params.thoughtId },
  //       { $pull: { reactions: { reactionId: req.params.reactionId } } },
  //       { runValidators: true, new: true }
  //     );

  //     if (!thoughtData) {
  //       return res.status(404).json({ message: "No thought with this id!" });
  //     }

  //     res.json(thoughtData);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // },
  // // // // //
};

// Exports thoughtController and all Methods as Module
module.exports = thoughtController;
