require('dotenv').config()


// DB connection
require('./../config/db.config')

//Model
const Place = require('./../models/place.model')
// Seed here!
const mongoose = require('mongoose')
const places = [
    {
        name: "La casa del libro",
        type: "bookstore",
        location: 'calle gran via'
    },
    {
        name: "Starbucks",
        type: "coffee-shop",
        location: 'paseo de la castellana'
    },
    {
        name: "deliccatessen",
        location: 'plaza mayor'
    }
]

//4.- TSeeding time!
Place
    .create(places)
    .then(data => {
        console.log('New Places:', data)
        mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))
