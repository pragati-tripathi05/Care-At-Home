const express = require("express")
const {MensalonData}= require("../Controllers/Mensalon.controller")

const MensalonRouter= express.Router();
MensalonRouter.get("/",MensalonData)

module.exports={
    MensalonRouter
}