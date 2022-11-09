const express = require("express");
const connection = require("./Config/db");
require("dotenv").config();
const { User } = require("./Models/user.model");
const cors = require("cors");
const { userSignup, userLogin } = require("./Controllers/user.controller");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to our api");
});

app.post("/signup", userSignup);

app.post("/login", userLogin);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db successfully");
  } catch (err) {
    console.log("Error in db connection");
    console.log(err);
  }

  console.log(`Listening on port ${PORT}`);
});
