const express = require("express");
const router = express.Router();
const {
  getUsers,
  setUser,
  checkloginCredentials,
  logout,
} = require("../controllers/userController");


router.get("/user-data", getUsers);
router.post("/signup", setUser);
router.post("/signin", checkloginCredentials);
router.get("/logout", logout)

module.exports = router;
