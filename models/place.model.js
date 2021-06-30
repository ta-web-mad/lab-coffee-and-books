const { Schema, model } = require("mongoose");

//const Schema = mongoose.Schema

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema({
    name: String,
    // unique: true -> Ideally, should be unique, but its up to you

    type: {
        type: String,
        enum: ['coffee shop', 'bookstore']//TODO
    },

    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
},
    {
        timestamps: true

    }

);

placeSchema.index({ location: '2dsphere' })

const Place = model("Place", placeSchema);

module.exports = Place;
