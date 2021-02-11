/// Esto lo primero
const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

// los Endpoints


router.get('/lista-cafes', (req, res) => {

  Place
    .find()
    .then(coffees => res.render('coffee-list', { coffees }))
    .catch(err => console.log(err))
})



router.get('/crear-cafe', (req, res) => res.render('new-coffee'))
router.post('/crear-cafe', (req, res) => {
  const { name, description, latitude, longitude} = req.body
  const location={
    type: 'Point',
    coordinates:[latitude, longitude]
  }

  Place
    .create({ name, description, location })
    .then(() => res.redirect('/lista-cafes'))
    .catch(err => console.log(err))



})



router.get('/detalles/:coffee_id', (req, res,) => {
  
  

  const coffee_id = req.params.coffee_id

  Place
      .findById(req.params.coffee_id)
      .then(theCoffee => res.render('coffee-details', {coffee: theCoffee}))    
      .catch(err => console.log(err))

})




module.exports = router