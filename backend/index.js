const express = require("express");
const connection = require("./Config/db");
require("dotenv").config();
const { User } = require("./Models/user.model");
const {Mensalon}=require("./Models/Mensalon.model")
const {MensalonRouter}=require("./Routes/Mensalon.route")
const {MentherapiesRouter}=require("./Routes/Mentherapies.route")
const {Womentherapiesdata}= require("./Routes/Womentherapies.route")
const {WomenhairRouter}=require("./Routes/WomenHair.route")

const {salonRouter}=require("./Routes/SalonPrime.route")

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const PORT =process.env.PORT ||  8080;
const cors = require("cors");
const { userSignup, userLogin } = require("./Controllers/user.controller");
const passport = require("./Config/google-oauth");
const authentication = require("./Middlewares/Authentication");
const { cartProd } = require("./Models/cartprod.model");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/mensalon",MensalonRouter)
app.use("/mentherapies",MentherapiesRouter)
app.use("/womentherapies",Womentherapiesdata)
app.use("/womenhair",WomenhairRouter)

app.use("/salon",salonRouter)


app.get("/", (req, res) => {
  res.send("welcome to our  api");
});

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile' ,"email"] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login',session:false }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

app.post("/addtocart",authentication,async (req,res)=>{
  const {title,price,quantity, userId} = req.body
  const prod = new cartProd({title,price,quantity, userId})
  await prod.save()
  res.send("product is added to the cart")
})

// app.get("/cart" , authentication, async(req,res)=>{

// })

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
