// Imports required Node Modules
const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      minlength: 10,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Assigns User Model to Constant
const Thought = model("Thought", thoughtSchema);

// Exports Model for use in App
module.exports = Thought;
