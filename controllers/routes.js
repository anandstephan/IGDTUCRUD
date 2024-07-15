const express = require("express");
const members = require("../models/members");
const router = express.Router();

// get api to fetch all the user
router.get("/", (req, res) => {
  res.status(200).json(members);
});

//Read a particular record
router.get("/:uid", (req, res) => {
  const id = req.params.uid;
  const user = members.filter((member) => member.id == id);
  if (user.length == 0) {
    res.status(400).json({ msg: "User Not Found" });
  } else {
    res.status(200).json({ user: user[0] });
  }
});

//Create a Record
router.post("/", (req, res) => {
  const user = req.body;
  members.push(user);
  return res.status(200).json({ msg: "User Added", allUser: members });
});

//Delete the user
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const remainingUser = members.filter((member) => member.id != id);
  return res.status(200).json({ users: remainingUser });
});

//Update the user
router.put("/:uid", (req, res) => {
  const id = +req.params.uid;
  members.forEach((user) => {
    if (user.id === id) {
      user.name = req.body.name;
      user.email = req.body.email;
    }
  });
  return res.status(200).json(members);
});

module.exports = router;
