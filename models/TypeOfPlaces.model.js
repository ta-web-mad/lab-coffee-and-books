const mongoose = require('mongoose')
const Schema = mongoose.Schema

const typeOfPlaceSchema = new Schema({


    type2: {

        type: String,

    }
})
const TypeOfPlace = mongoose.model("TypeOfPlace", typeOfPlaceSchema)

module.exports = TypeOfPlace