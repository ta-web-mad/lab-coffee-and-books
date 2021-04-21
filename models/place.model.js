// User model development
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: String,
    enum: ['coffee shop', 'book store']
}, {
    location: {
        type: {
            type: String,
        },
         coordinates: [Number]
    }
},
 {
    timestamps: true
})

placeSchema.index({ location: '2dsphere' })  

const Place = mongoose.model('Place', placeSchema)

module.exports = Place

// AIzaSyARPDFgzauMJ8QUNvEJQq-HyfmGLWXPA0U


