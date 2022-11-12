const { booking } = require("../Models/booking.model");

const bookingData = async (req, res) => {
  const { user_id } = req.body;
  const bookingHistory = await booking.find({ user_id: user_id });
  res.send({ history: bookingHistory });
};

const addBookingData = async (req, res) => {
  const { title, price, quantity, userId } = req.body;
  const data = new booking({ title, price, quantity, userId });
  await data.save();
  res.send("Data added to History tab");
};

module.exports = {
  bookingData, addBookingData
};

// app.get("/getCalculation", authentication, async (req, res) => {
//     const {user_id} = req.body;
//     const all_bmi = await BMIModel.find({user_id : user_id})
//     res.send({history : all_bmi})
// })
