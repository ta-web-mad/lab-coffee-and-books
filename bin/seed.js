const mongoose = require('mongoose')
const Place = require('../models/place.model')

const dbName = 'coffee-and-books'
mongoose.connect(`mongodb://localhost/${dbName}`)


const places = [
  {
    name: 'Starbucks',
    type: 'Coffee Shop',
  },

  {
    name: 'Casa del Libro',
    type: 'Book Store',
  },
]


Place
  .create(places)
  .then(elm => {
    console.log(`Create: ${elm.length} place`)
    mongoose.connection.close()
  }).catch(err => new Error(err))