const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", menuItemSchema);
