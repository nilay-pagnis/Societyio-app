const express = require("express");
const router = express.Router();
const {
  setSociety,
  setMembers,
  bookEventArena,
} = require("../controllers/societyController");
const { reportComplaint } = require("../controllers/reportIssueController");

router.post("/create-society", setSociety);
router.post("/add-members", setMembers);
router.post("/book-arena", bookEventArena);
router.post("/report-complaint", reportComplaint);

module.exports = router;
