const express = require("express");
const connection = require("./Config/db");
require("dotenv").config();
const { User } = require("./Models/user.model");
const {Mensalon}=require("./Models/Mensalon.model")
const {MensalonRouter}=require("./Routes/Mensalon.route")
const {MentherapiesRouter}=require("./Routes/Mentherapies.route")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const PORT =process.env.PORT ||  8080;
const cors = require("cors");
const { userSignup, userLogin } = require("./Controllers/user.controller");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/mensalon",MensalonRouter)
app.use("/mentherapies",MentherapiesRouter)

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
