const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coffeeShopSchema = new Schema({
  name: {
    type: String,
    required: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1),
    default: 'Cafeteria desconocida'
  },
  type: {
    type: String,
    enum: ['Coffee shop', 'Book Store', 'Restaurante y tienda de alimentación'],
   },
   coffees: {
     type: String,
     enum: ['Café expreso', 'Café americano', 'Macchiato', 'Café espresso panna', 'Café doble', 'Cortado','Café con leche']
   },
  location: {                
    type: {
      type: String
    },
    coordinates: [Number]
  }

})

coffeeShopSchema.index({location: '2dsphere'})

const CoffeeShop = mongoose.model('Coffee Shop', coffeeShopSchema)

module.exports = CoffeeShop