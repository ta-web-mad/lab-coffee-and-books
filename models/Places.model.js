const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placesSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore']
  }, 
  location: {
    type: {
        type: String
    },
    coordinates: [Number]
}
}, {
  timestamps: true
})

placesSchema.index({ location: '2dsphere' })


const Place = model("Place", placesSchema);

module.exports = Place;
