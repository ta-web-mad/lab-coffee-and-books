const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema(
    {
        name: { type: String, unique: true },
        type: {
            type: String,
            enum: ["coffee-shop", "bookstore"]//REVISAR
        }
    },
    {
        timestamps: true
    }
);
placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
