const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  rating: { type: Number, min: 1, max: 5 },
  comment: String
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);