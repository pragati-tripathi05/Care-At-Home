const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  userId: { type: String, required: true },
});

const booking = new mongoose.model("book", bookingSchema);

module.exports = { booking };
