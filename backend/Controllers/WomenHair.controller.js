const {Womenhair}= require("../Models/WomenHair.model")

const WomenhairData= async(req,res)=>{
    const data= await Womenhair.find()
    res.send(data)
}

module.exports={
    WomenhairData 
}