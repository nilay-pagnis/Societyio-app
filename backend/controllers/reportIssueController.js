const issues =  require("../models/reportIssueModel");

const reportComplaint = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content ca n not be empty" });
    return;
  }

  const complaint = new issues({
    fname: req.body.fname,
    fname: req.body.lname,
    societyName: req.body.societyName,
    complaint: req.body.complaint,
  });
  complaint
    .save(complaint)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred",
      });
    });
  
};
module.exports = {
  reportComplaint,
};