const { response } = require('express')
const express = require('express')
const router = express.Router()

const CoffeeShop = require('./../models/place.model')

router.get('/listado', (req, res) => {
  
  CoffeeShop
    .find()
    .then(response => {
      console.log(response)
      res.render('pages/coffee/coffee-list', {response})})
    .catch(err => console.log('erroooooor!!!', err))
}) 



router.get('/crear', (req, res) => res.render('pages/coffee/coffee-create'))

router.post('/crear', (req, res)=>{

  const {name, description, bestCoffee, latitude, longitude} = req.body
  const type = req.body.description
  const coffees = req.body.bestCoffee
  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }
  console.log("creando", name, type, coffees, location)
  CoffeeShop
    .create({name, type, bestCoffee, location})
    .then(()=> res.redirect('/cafeterias/listado'))
    .catch(err => console.log(err))

})

router.post('/:id/delete', (req, res) => {
  const { id } = req.params
  console.log(id);

  Celebrity
    .findByIdAndDelete(id)
    .then(res.redirect('/listado'))
    .catch(err => {
      console.log(err);
    })
})


module.exports = router