const {Mentherapies}= require("../Models/Mentherapies.model")

const Mentherapiesdata= async(req,res)=>{
    const data= await Mentherapies.find()
    res.send(data)
}

module.exports={
    Mentherapiesdata 
}