const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"],
      required: true
    }
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
