// Imports required Node Modules
const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
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
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
