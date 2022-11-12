const express = require("express");
const connection = require("./Config/db");
require("dotenv").config();
const { User } = require("./Models/user.model");
const { Mensalon } = require("./Models/Mensalon.model");
const { MensalonRouter } = require("./Routes/Mensalon.route");
const { MentherapiesRouter } = require("./Routes/Mentherapies.route");
const { Womentherapiesdata } = require("./Routes/Womentherapies.route");
const { WomenhairRouter } = require("./Routes/WomenHair.route");

const { salonRouter } = require("./Routes/SalonPrime.route");
const { bookingData } = require("./Controllers/booking.controller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const { userSignup, userLogin } = require("./Controllers/user.controller");
const passport = require("./Config/google-oauth");
const authentication = require("./Middlewares/Authentication");

const {
  addToCart,
  getCartProds,
  incQuantity,
  decQuantity,
} = require("./Controllers/cart.controller");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/mensalon", MensalonRouter);
app.use("/mentherapies", MentherapiesRouter);
app.use("/womentherapies", Womentherapiesdata);
app.use("/womenhair", WomenhairRouter);

app.use("/salon", salonRouter);

// app.get("/", (req, res) => {
//   res.send("welcome to our  api");
// });

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile' ,"email"] }));

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login',session:false }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

app.post("/addtocart", authentication, addToCart);

app.get("/cart", authentication, getCartProds);

app.patch("/cart/inc/:prodId", authentication, incQuantity);

app.patch("/cart/dec/:prodId", authentication, decQuantity);

app.get("/bookingHistory", authentication, bookingData);
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
