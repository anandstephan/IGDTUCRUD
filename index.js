const express = require("express");
const cors = require("cors");
const app = express();

//Copy of Db
const members = [
  // 2!=2
  {
    id: 1,
    name: "Shradha",
    email: "shraha@kapoor.com",
    status: "active",
  },
  {
    id: 2,
    name: "Akshay",
    email: "akshay@kumar.com",
    status: "inactive",
  },
];

app.use(cors());
app.use(express.json()); //Data comes from body

//Routes
// app.get("/test", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// get api to fetch all the user
app.get("/allUser", (req, res) => {
  res.status(200).json(members);
});

//Read a particular record
app.get("/users/:uid", (req, res) => {
  const id = req.params.uid;
  const user = members.filter((member) => member.id == id);
  if (user.length == 0) {
    res.status(400).json({ msg: "User Not Found" });
  } else {
    res.status(200).json({ user: user[0] });
  }
});

//Create a Record
app.post("/user", (req, res) => {
  const user = req.body;
  members.push(user);
  return res.status(200).json({ msg: "User Added", allUser: members });
});

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  const remainingUser = members.filter((member) => member.id != id);
  return res.status(200).json({ users: remainingUser });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
