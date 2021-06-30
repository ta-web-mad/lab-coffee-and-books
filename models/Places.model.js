const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
    {
        name: String,
        type: {
            type: String,
            env: ['coffee shop', 'bookstore'],
        },
        location: {
            type: {
                type: String,
                default: 'Point',
            },
            coordinates: [Number],
        },
    },
    { timestamps: true }
)

placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('Place', placeSchema)

module.exports = Place
