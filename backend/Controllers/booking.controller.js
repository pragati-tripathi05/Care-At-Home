const { booking } = require("../Models/booking.model");

const bookingData = async (req, res) => {
  const { user_id } = req.body;
  const bookingHistory = await booking.find({ user_id: user_id });
  res.send({ history: bookingHistory });
};

module.exports = {
  bookingData,
};

// app.get("/getCalculation", authentication, async (req, res) => {
//     const {user_id} = req.body;
//     const all_bmi = await BMIModel.find({user_id : user_id})
//     res.send({history : all_bmi})
// })
