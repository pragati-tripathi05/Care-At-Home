const mongoose = require("mongoose")

const WomentherapiesSchema = mongoose.Schema({
    package: {type: String , required: true},
    description: {type: String, required: true},
    rating: {type: Number , required: true},
    views: {type: String , required: true},
    price: {type: Number, required: true},
    time: {type: String , required: true},
    button: {type: String , required: true},
    feature: {type: String, required: true},
    benefits: {type: String , required: true},
    image: {type: String, required: true},
    
})
const Womentherapies = mongoose.model("womentherapie" , WomentherapiesSchema)

module.exports = {Womentherapies}