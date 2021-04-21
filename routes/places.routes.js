const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')

// Endpoints

router.get('/', (req, res) => {

  Place
    .find()
    .then((allPlaces) => res.render('pages/places/places-list', { allPlaces }))
    .catch(err => console.log(err))

})

//new place
router.get('/create', (req, res) => res.render('pages/places/places-create'))

router.post('/create', (req, res) => {
  console.log(req.body);
  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/places/'))
    .catch(err => console.log(err))

})

//se details
router.get('/:id', (req, res) => {
  const { id } = req.params

  Place
    .findById(id)
    .then(place => res.render('pages/places/places-detail', place))
    .catch(err => console.log(err))

})


//delete place
router.get('/delete/:id', (req, res) => {

  const { id } = req.params

  Place
    .findByIdAndDelete(id)
    .then(() => res.redirect('/places/'))
    .catch(err => console.log(err))

})

//edit place
router.get('/edit/:id', (req, res) => {
  const { id } = req.params

  Place
    .findById(id)
    .then(response => {
      console.log('esta es la respuesta del get', response);
      res.render('pages/places/places-edit', response)
    })
    .catch(err => console.log(err))

})

router.post('/edit/:id', (req, res) => {
  const { id } = req.params
  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .findByIdAndUpdate(id, { name, type, location })
    .then(response => {
      console.log('esta es la respuesta del post', response)
      res.redirect('/places/')
    })
  res.redirect('/places/')
    .catch(err => console.log(err))

})

module.exports = router