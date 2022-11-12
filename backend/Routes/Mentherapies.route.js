const express = require("express")
const {Mentherapiesdata}= require("../Controllers/Mentherapies.controller")

const MentherapiesRouter= express.Router();
MentherapiesRouter.get("/",Mentherapiesdata)

module.exports={
    MentherapiesRouter
}
