const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "please add a text value"],
    },
    lname: {
      type: String,
      required: [true, "please add a text value"],
    },
    username: {
      type: String,
      unique: true,
      required: [true, "please add a text value"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
    },
    phone: {
      type: Number,
      unique: true,
      required: [true, "can't be blank"],
    },
    societyname: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
    },
    address: {
      type: String,
      unique: true,
    },
    isSocietyCreated: {
      type: Boolean,
      default: false,
    },
    isuserlogin: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, "please add a text value"],
    },
    cpassword: {
      type: String,
      required: [true, "please add a text value"],
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamp: true,
  }
);


// hashing the password

userSchema.pre('save', async function(next) {
  if(this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.password, 12);
  }
  next();
});

//generate token
userSchema.methods.generateAuthToken = async function() {
  try {
    let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
  } catch (err) {
    console.alert(err);
  }
}

const users = mongoose.model("users", userSchema);
module.exports = users;