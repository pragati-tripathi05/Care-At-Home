const express = require("express")
const {WomenhairData}= require("../Controllers/WomenHair.controller")

const WomenhairRouter= express.Router();
WomenhairRouter.get("/",WomenhairData)

module.exports={
    WomenhairRouter
}