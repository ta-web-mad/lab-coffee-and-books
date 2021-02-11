const mongoose = require('mongoose')
const Place = require('./../models/place.model')
const dbName = 'coffee-and-books'
mongoose.connect(`mongodb://localhost/${dbName}`)

const place = [{
    name: 'Black Poplar',
    type: 'coffeeShop',
  }, {
    name: 'Contrabandos',
    type: 'bookStore',
  },
  {
    name: 'Ruda Café',
    type: 'coffeeShop',
  }
]

Place
  .create(place)
  .then(res => {
    console.log(`There are ${res.length} places `)
    mongoose.connection.close()
  })
  .catch(err => console.log(`ERROR:`, err))

