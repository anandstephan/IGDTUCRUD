const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json()); //Data comes from body

//Middleware custom or ready made

const middleware = (req, res, next) => {
  console.log("Hello From Middleware");
  next();
};

app.use(middleware);
//End Points
app.get("/komal", (req, res) => {
  console.log("Hi I'am komal pandey!!!");
});

app.post("/malvika", (req, res) => {
  console.log("Hi I'am Malvika Singh!!!");
});
app.put("/neha", (req, res) => {
  console.log("Hi I'am neha dhiman!!!");
});
app.delete("/nilakshi", (req, res) => {
  console.log("Hi I'am Nilakshi Shree!!!");
});

//DB Call
async function DBConnect() {
  await mongoose.connect(
    "mongodb+srv://harshpal830:1234567890@cluster0.qmaeckr.mongodb.net/crudApp"
  );
  console.log("DB Connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
console.log("A");
DBConnect();
console.log("B");
//Middleware
//DB Call

//End Point or Routes
app.use("/user", require("./controllers/routes"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
