const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Place = require('../models/place')

router.get('/', (req, res) => {

  Place
    .find()
    .then(places => res.render('places/places-list', { places }))
    .catch(err => console.log('ERROR:', err))
})


router.get('/new', (req, res) => res.render('places/new'))

router.post('/new', (req, res) => {

  console.log(req.body)

  const { name, latitude, longitude } = req.body
  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, location })
    .then(() => res.redirect(`/places`))
    .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res) => {

  const place_id = req.params.id

  Place
    .findByIdAndRemove(place_id)
    .then(() => res.redirect(`/places`))
    .catch(err => console.log(err))
})


router.get('/:id', (req, res) => {

  const place_id = req.params.id

  Place
    .findById(place_id)
    .then(place => res.render('places/place-details', place))
    .catch(err => console.log(err))
})


router.get('/:id/edit', (req, res) => {

  const place_id = req.params.id
  Place
    .findById(place_id)
    .then(place => res.render('places/edit', place))
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {

  const { name, latitude, longitude } = req.body
  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }
  const place_id = req.params.id

  Place
    .findByIdAndUpdate(place_id, { name, location })
    .then(() => res.redirect(`/places`))
    .catch(err => console.log(err))
})



module.exports = router