require('dotenv').config()

// 0-. DB connection
require('./../config/db.config')
console.log('Connection opened.')

// 1.- require Mongoose
const mongoose = require('mongoose')

// 2. - Model requirement
const Place = require('./../models/place.model')

// 3 .- Data to seed
const places = [
  {
    name: 'Starbucks',
    type: 'CoffeeShop',
    
  },
  {
    name: "Dunkin' Donuts",
    type: 'CoffeeShop',
  },
  {
    name: 'Lavazza',
    type: 'CoffeeShop',
  },
  {
    name: 'Porrua',
    type: 'Bookstore',
  },
  {
    name: 'Ghandi',
    type: 'Bookstore',
  },
  {
    name: "Android's Dungeon",
    type: 'Bookstore',
  },
]

// 4.- Seed
Place
  .create(places)
  .then(creation => {
    console.log('Seeded places:', creation)
    mongoose.connection.close()
    console.log('Connection closed...')
  })
  .catch(err => console.log('SEEDING ERROR:', err))

//In Terminal (just once) to insert seed:
//$ node bin/seeds.js