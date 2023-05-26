const mongoose = require("mongoose");

const eventArenaSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "please add a text fname"],
    },
    lname: {
      type: String,
      required: [true, "please add a text lname"],
    },
    eventFrom: {
      type: String,
      unique: true,
      required: [true, "please add a text eventFrom"],
    },
    eventTo: {
      type: String,
      unique: true,
      required: [true, "please add a text eventTo"],
    },
    eventname: {
      type: String,
      required: [true, "please add a text eventname"],
    },
  },
  {
    timestamp: true,
  }
);

const events = mongoose.model("event", eventArenaSchema);
module.exports = events;