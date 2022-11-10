const express = require("express")
const {salonData}= require("../Controllers/SalonPrime.controller")

const salonRouter= express.Router();
salonRouter.get("/",salonData)

module.exports={
   salonRouter
}