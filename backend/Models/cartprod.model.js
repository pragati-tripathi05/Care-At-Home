const mongoose = require("mongoose")

const cartprodSchema = mongoose.Schema({
    title: {type: String , required: true},
    price: {type: Number , required: true},
    quantity: {type: Number, default: 1},
    userId: {type:String , required:true}
})


const cartProd = mongoose.model("cart" , cartprodSchema)

module.exports = {cartProd}