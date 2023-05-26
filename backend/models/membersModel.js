const mongoose = require("mongoose");
//var uniqueValidator = require("mongoose-unique-validator");

const membersSchema = new mongoose.Schema(
  {
    societyName: {
      type: String,
      required: [true, "please add society name"],
    },
    trk: { type: Array, "default": {} },
  },
  {
    timestamp: true,
  }
);

const societyMember = mongoose.model("societyMembersdb", membersSchema);
module.exports = societyMember;
