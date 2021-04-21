const express = require('express')
const router = express.Router()

const { isValidIdFormat } = require('./../utils')

const mongoose = require('mongoose')

const Place = require('./../models/place.model')

// Create place (GET)
router.get('/new', (req, res) => res.render('pages/places/place-new'))

// Create place (POST)
router.post('/new', (req, res) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
      type: 'Point',
      coordinates: [latitude, longitude]
    }

    if (name.length === 0 || latitude.length === 0 || longitude.length === 0) {
    res.render('pages/places/place-new', { errorMessage: 'Please fill all the fields' })
    return
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => console.log('Error:', err))
})

// Places list (GET)
router.get('/', (req, res) => {
    Place
        .find()
        .then(allPlaces => res.render('pages/places/places-list', { allPlaces }))
        .catch(err => console.log('Error:', err))
})

// Place details (GET)
router.get('/:id', (req, res) => {

  if (isValidIdFormat(req.params.id)) {
    Place
        .findById(req.params.id)
        .then(place => res.render('pages/places/place-detail', {place}))
        .catch(err => console.log('Error!', err))
  } else {
        res.redirect('/places')
    }
})

// Place edit (GET)
router.get('/:id/edit', (req, res) => {
  if (isValidIdFormat(req.params.id)) {
      Place
        .findById(req.params.id)
        .then(place => res.render('pages/places/place-edit', {place}))
        .catch(err => console.log('Error!', err))
  } else {
      res.redirect('/places')
  }
})

// Place edit (POST)
router.post('/:id/edit', (req, res) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
      type: 'Point',
      coordinates: [latitude, longitude]
    }

    if (name.length === 0 || latitude.length === 0 || longitude.length === 0) {
    res.render('pages/places/place-edit', { errorMessage: 'Please fill all the fields' })
    return
    }

      Place
        .findByIdAndUpdate(req.params.id, { name, type, location })
        .then(() => res.redirect(`/places/`))
        .catch(err => console.log('Error!', err))
})

// Place remove (POST)
router.post('/:id/delete', (req, res) => {

      Place
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect(`/places/`))
        .catch(err => console.log('Error!', err))
})

module.exports = router