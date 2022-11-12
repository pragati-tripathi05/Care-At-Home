const {Womentherapies}= require("../Models/Womentherapies.model")

const Womentherapiesdata= async(req,res)=>{
    const data= await Womentherapies.find()
    res.send(data)
}

module.exports={
    Womentherapiesdata 
}