const Users = require("../models/userModel");
const jwtToken = require('jsonwebtoken')
const bcrypt = require("bcrypt");
//@desc   Get users
//@route  Get/home/user
//@access Private

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

const setUser = async (req, res) => {

  const {fname,lname,username,email,phone,societyname,address,isSocietyCreated, isuserlogin, featured ,password,cpassword} = req.body;

  if (false) {
    return res.status(400).json({ message: "content ca n not be empty" });
  }
  try {

    const userExist = await Users.findOne({ email:email});

    if(userExist) {
      return res.status(422).json({error:"Email already Exist"});

    } else if (password !== cpassword ) {
      return res.status(422).json({error:"credentials not matching"});
    } else {
      const user = new Users({
        fname,
        lname,
        username,
        email,
        phone,
        societyname,
        address,
        isSocietyCreated:false,
        isuserlogin:false,
        featured:false,
        password,
        cpassword,
      });
      // console.log(user)
      const doc = await user.save();
      if(doc) {
        
        res.status(201).json({ message: "user account created successfully" });
      } else {
        res.status(505).json({ message: "failed to create account" });
      }
      
    }
  } catch (err) {
    console.alret(err)
  }
};

const checkloginCredentials = async (req, res) => {
  try {
    let token;
    const {email, password} = req.body;
    if(!email || !password) {
      return res.status(400).json({error: "Please fill the data"})
    }
    const userlogin = await Users.findOne({email:email});
    //console.log(userlogin);
    //jwt
    if(userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      token = await userlogin.generateAuthToken();

      res.cookie("jwtToken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
      });

      if (!isMatch) {
        res.status(400).json({ error: "invalid credentials" });
      } else {
        res.json({ message: "login successfull" });
      }
    } else {
      res.status(400).json({error:"Invalid Credentials"})
    }
  } catch (err) {
      console.alret(err);
  }
}


const logout = (req, res) => {
  res.clearCookie('jwtoken',{path: '/'});
  res.status(200).send("user logout")
}




module.exports = {
  getUsers,
  setUser,
  checkloginCredentials,
  logout,
};
