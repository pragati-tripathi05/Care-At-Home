const {Mensalon}= require("../Models/Mensalon.model")

const MensalonData= async(req,res)=>{
    const data= await Mensalon.find()
    res.send(data)
}

module.exports={
    MensalonData 
}