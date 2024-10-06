// Imports required Node Modules
const { Schema, model } = require("mongoose");

// Imports required App Modules
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 100,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Assigns User Model to Constant
const Thought = model("Thought", thoughtSchema);

// Exports Model for use in App
module.exports = Thought;
