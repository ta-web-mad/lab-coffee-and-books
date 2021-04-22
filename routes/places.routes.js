const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')
// Endpoints

// Display places list

router.get('/list', (req, res) => {
  Place
    .find()
    .then(allPlaces => res.render('pages/places/places-list', { allPlaces }))
    .catch(err => console.log('Error!', err))
})


// Create new places

router.get('/create', (req, res) => res.render('pages/places/create-place'))
router.post('/create', (req, res) => {

  const {name,type,latitude,longitude} = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }


  Place
    .create({name,type,location})
    .then(() => res.redirect('/places/list'))
    .catch(err => console.log(err))
})

// Delete places

router.post('/delete/:place_id', (req, res) => {

  const {place_id} = req.params

  Place
    .findByIdAndRemove(place_id)
    .then(() => res.redirect('/places/list'))
    .catch(err => console.log(err))
})


// Edit places

router.get('/edit/:place_id', (req, res) => {
  
  const {place_id} = req.params

  Place
    .findById(place_id)
    .then(thePlace => res.render('pages/places/edit-place', thePlace))
    .catch(err => console.log(err))
})

router.post('/edit/:place_id', (req, res) => {
  const {name,type} = req.body
  const {place_id} = req.params

  Place
    .findByIdAndUpdate(place_id, {name,type})
    .then(place => res.redirect('/places/list'))
    .catch(err => console.log(err))
})

module.exports = router