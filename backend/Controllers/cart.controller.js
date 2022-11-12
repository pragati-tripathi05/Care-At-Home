const { cartProd } = require("../Models/cartprod.model");

const addToCart = async (req, res) => {
  const { title, price, quantity, userId } = req.body;
  const existing = await cartProd.findOne({title})
  if(existing){
    res.send("Already in the cart")
  }
  else {
  const prod = new cartProd({ title, price, quantity, userId });
  await prod.save();
  res.send("product is added to the cart");
  }
};

const getCartProds = async (req, res) => {
  const { userId } = req.body;
  const prod = await cartProd.find({ userId });
  res.send(prod);
};

const incQuantity = async (req, res) => {
  const { prodId } = req.params;
  const prod = await cartProd.findById(prodId);
  await cartProd.updateOne({ _id: prodId }, { $inc: { quantity: 1 } });
  res.send("Quantity increased");
};

const decQuantity = async (req, res) => {
  const { prodId } = req.params;
  const prod = await cartProd.findById(prodId);
  if (prod.quantity == 1) {
    await cartProd.findByIdAndDelete(prodId);
    res.send("Deleted from the cart");
  } else if (prod.quantity > 1) {
    await cartProd.updateOne({ _id: prodId }, { $inc: { quantity: -1 } });
    res.send("Quantity decreased");
  }
};

module.exports = { addToCart, getCartProds, incQuantity, decQuantity };
