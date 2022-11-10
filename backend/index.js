const express = require("express");
const connection = require("./Config/db");
require("dotenv").config();
const { User } = require("./Models/user.model");
const cors = require("cors");
const { userSignup, userLogin } = require("./Controllers/user.controller");
const passport = require("./Config/google-oauth");
const authentication = require("./Middlewares/Authentication");
const { cartProd } = require("./Models/cartprod.model");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to our api");
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
