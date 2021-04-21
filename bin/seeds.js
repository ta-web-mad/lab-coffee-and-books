require('dotenv').config()


// DB connection
require('./../config/db.config')

// 1.- require Mongoose
const mongoose = require('mongoose')

// 2. - Model requirement
const Place = require('./../models/place.model')

// 3 .- Data to seed
const place = [
  {
    name: "Café del Mar",
    type: "coffee shop",
  },
  {
    name: "Café del Libro",
    type: "coffee shop",
  },
  {
    name: "Casa del libro",
    type: "bookstore",
  }

]

// 4.- Seeding time yay!
Place
  .create(place)
  .then(response => {
    console.log('Estos son los comercios!', response)
    mongoose.connection.close();
  })
  .catch(err => console.log('se produjo un error...', err))
