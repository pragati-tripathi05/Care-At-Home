const express = require("express");
const connection = require("./Config/db");
require("dotenv").config()
const { User } = require("./Models/user.model");
const {Mensalon}=require("./Models/Mensalon.model")
const {MensalonRouter}=require("./Routes/Mensalon.route")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const PORT =process.env.PORT ||  8080;
const app = express();

app.use(express.json());

app.use("/mensalon",MensalonRouter)

app.get("/", (req, res) => {
  res.send("welcome to our api");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 4, async function (err, hash) {
    // Store hash in your password DB.
    if (err) {
      res.send("Something went wrong, please signup later");
    } else {
      const user = new User({ name, email, password: hash });
      await user.save();
      res.send("User Registration Successful");
    }
  });
});

app.post("/login", async (req, res) => {
    const {email, password } = req.body;
    const user = await User.findOne({email: email})
    const userId = user._id
    bcrypt.compare(password, hash, function(err, result) {
        if(result){
            const token = jwt.sign({ id: userId }, process.env.secret_key);
            res.send({msg: "Login successful" , token : token})
        }
        else{
            res.send("Wrong credentials")
        }
    });
  });

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
