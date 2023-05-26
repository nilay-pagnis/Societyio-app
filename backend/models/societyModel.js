const mongoose = require("mongoose");
//var uniqueValidator = require("mongoose-unique-validator");

const societySchema = new mongoose.Schema(
  {
    societyname: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
    },
    address: {
      type: String,
      required: [true, "please add address"],
    },
    societyMember: {
      type: Boolean,
      default: false,
    },
    eventAreaCount: {
      type: Number,
      required: [true, "please add a value"],
    },
    guestRoomCount: {
      type: Number,
      required: [true, "please add a value"],
    },
    isGymAvailable: {
      type: Boolean,
      default: false,
    },
    admin: {
      type: String,
      required: [true, "please add address"],
    },
  },
  {
    timestamp: true,
  }
);

const Society = mongoose.model("Societydb", societySchema);
module.exports = Society;
