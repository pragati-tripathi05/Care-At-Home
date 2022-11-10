const {Salon}= require("../Models/SalonPrime.model")

const salonData= async(req,res)=>{
    const data= await Salon.find()
    res.send(data)
}

module.exports={
   salonData 
}