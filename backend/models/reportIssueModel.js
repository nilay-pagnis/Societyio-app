const mongoose = require("mongoose");

const reportIssueSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "please add a text fname"],
    },
    lname: {
      type: String,
      required: [true, "please add a text lname"],
    },
    societyname: {
      type: String,
      required: [true, "please add a text fname"],
    },
    complaint: { type: Array, default: {} },
  },
  {
    timestamp: true,
  }
);

const issues = mongoose.model("complaint", reportIssueSchema);
module.exports = issues;
