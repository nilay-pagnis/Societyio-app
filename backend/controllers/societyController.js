const Society = require("../models/societyModel");
const societyMember = require("../models/membersModel");
const events = require("../models/eventsArenaModel");


const setSociety = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content ca n not be empty" });
    return;
  }
  const society = new Society({
    societyname: req.body.societyname,
    address: req.body.address,
    eventAreaCount: req.body.eventAreaCount,
    guestRoomCount: req.body.guestRoomCount,
    isGymAvailable: req.body.isGymAvailable,
    admin: req.body.admin,
  });
  society
    .save(society)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred",
      });
    });
  //console.log(comitteeMembers);
};

const setMembers = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content ca n not be empty" });
    return;
  }
  
  const membersdb = new societyMember({
    
    societyName: req.body.societyName,
    trk: req.body.trk
  });
  membersdb
    .save(membersdb)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred",
      });
    });
};


const bookEventArena = async (req, res) => {
  const {fname, lname, eventFrom, eventTo, eventname} = req.body;

  if(!req.body){
    return res.status(400).json({ message: "content ca n not be empty" });
  }
  try {
    const bookevent = await events.findOne({ eventFrom:eventFrom});
    if(bookevent) {
      return res.status(422).json({error:"Event already Exist"});
    } else {
      const event = new events({
        fname, lname, eventFrom, eventTo, eventname,
      });

      const doc = await event.save();
      if(doc) {
       
        res.status(201).json({ message: "Event created successfully" });
      } else {
         res.status(505).json({ message: "Failed to create new Event" });
      }
    }
  } catch (err) {
    alert(err);
  }
}



module.exports = {
  setSociety,
  setMembers,
  bookEventArena,
};
