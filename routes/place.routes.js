const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Place = require('../models/place-model')


//Index with places list
router.get('/', (req, res) => {
  
  Place
    .find()
    .then(places => res.render('places/index', {places}))
    .catch(err => console.log('ERROR', err))
})

//Create place
router.get('/new-place', (req, res) => res.render('places/create-place'))

router.post('/new-place', (req, res) => {

  const { name, type, latitude, longitude } = req.body
  
  
  
  if (!latitude || !longitude) {
    res.render('places/create-place', {errorMsg: "Location required"})
  } else {
    const location = {
      type: 'Point',
      coordinates: [latitude, longitude]
    }

    Place
      .create({ name, type, location })
      .then(newPlace => res.redirect('/'))
      .catch(err => console.log(err))


  }

})

//Edit place
router.get('/edit/:_id', (req, res) => {
  const place_id = req.params._id

  Place
    .findById(place_id)
    .then(place => res.render('places/edit-place', place))
    .catch(err => console.log(err))
})

router.post('/edit/:_id', (req, res) => {
  const {name, type} = req.body
  const place_id = req.params._id

  Place
    .findByIdAndUpdate(place_id, {name, type})
    .then(place => res.redirect('/'))
    .catch(err => console.log(err))
})

//Delete
router.post('/delete/:_id', (req, res) => {
  const place_id = req.params._id

  Place
    .findByIdAndRemove(place_id)
    .then(place => res.redirect('/places'))
    .catch(err => console.log(err))
})




module.exports = router
