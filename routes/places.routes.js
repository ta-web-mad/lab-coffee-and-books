const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Place = require('./../models/place.model')


router.get('/', (req, res) => {
  Place
    .find()
    .then(places => res.render('place-list', { places }))
    .catch(err => console.log('ERROR', err))
})

router.get('/new', (req, res) => res.render('new-place'))

router.post('/new', (req, res) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type})
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})
router.get('/edit/:_id', (req, res) => {

  const place_id = req.params._id

  Place
    .findById(place_id)
    .then(() => res.render('edit-places'))
    .catch(err => console.log(err))
})

router.post('/edit/:_id', (req, res) => {

  const { name, type } = req.body
  const place_id = req.params._id

  Place
    .findByIdAndUpdate(place_id, { name, type })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

router.get('/delete/:id', (req, res) => {
  const place_id = req.params._id

  Place
    .findByIdAndDelete(place_id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})


module.exports = router