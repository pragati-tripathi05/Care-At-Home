const express = require("express")
const {Womentherapiesdata}= require("../Controllers/Womentherapies.controller")

const MentherapiesRouter= express.Router();
MentherapiesRouter.get("/",Womentherapiesdata)

module.exports={
    Womentherapiesdata
}