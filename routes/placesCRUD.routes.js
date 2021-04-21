const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

// Endpoints
//READ
router.get('/', (req, res) => {
  Place
    .find()
    .then(allPlaces => {
      allPlaces.reverse()
      //console.log('All places found:', { places })
      res.render('pages/places', { allPlaces })
    })
    .catch(err => console.log('MONGODB READ ERROR: ', err))
})

//CREATE
router.post('/create', (req, res) => {
  const { name, type, latitude, longitude } = req.body
  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }
  Place
    .create({ name, type, location })
    .then(placeCreated => {
      //console.log('Place created:', placeCreated)
      res.redirect('/places')
    })
    .catch(err => console.log('MONGODB CREATE ERROR: ', err))
})

//UPDATE
router.post('/:placeId/edit', (req, res) => {
  placeId = req.params.placeId
  let placeToEdit = ''
  Place
    .findById(placeId)
    .then(placeFound => {
      placeToEdit = placeFound
      return Place.find()
    })
    .then(allPlaces => {
      allPlaces.reverse()
      // console.log('Place to edit:', placeToEdit)
      res.render('pages/places', { allPlaces, placeToEdit })
    })
    .catch(err => console.log('MONGODB READ ERROR: ', err))
})

router.post('/:placeId/update', (req, res) => {
  placeId = req.params.placeId
  const { name, type, latitude, longitude } = req.body
  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }
  Place
    .findByIdAndUpdate(placeId, { name, type, location })
    .then(editedPlace => {
      // console.log(`Old>New info:`)
      // console.log('Name:', editedPlace.name, '>', name)
      // console.log('Type:', editedPlace.type, '>', type)
      // console.log('Latitude:', editedPlace.location[0], '>', type)
      // console.log('Longitude:', editedPlace.location[1], '>', type)
      res.redirect('/places')
    })
    .catch(err => console.log('MONGODB UPDATE ERROR: ', err))
})

//DELETE
router.post('/:placeId/delete', (req, res) => {
  placeId = req.params.placeId
  Place
    .findByIdAndDelete(placeId)
    .then(deletedPlace => {
      console.log('This place has been deleted:', deletedPlace)
      res.redirect('/places')
    })
    .catch(err => console.log('MONGODB DELETE ERROR: ', err))
})

module.exports = router