const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['Coffee Shop', 'Book']
  }
}, {
  timestamps: true
})

const Place = mongoose.model("Place", placeSchema);

module.exports = User