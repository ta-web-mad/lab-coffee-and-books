const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

// Endpoints
router.get('/', (req, res) => {

  Place
    .find()
    .then(places => res.render('places/index', {places}))
    .catch(err => console.log('Error:', err))

})





router.get('/create', (req, res) => res.render('places/create'))

router.post('/create', (req, res) => {

  const {name, type, latitude, longitude} = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({name, type, location})
    .then(() => res.redirect('/places'))
    .catch(err => console.log('Error:', err))
})





router.post('/delete/:id', (req, res) => {

  const placeID = req.params.id

  Place
    .findByIdAndRemove(placeID)
    .then(() => res.redirect('/places'))
    .catch(err => console.log('Error:', err))
})




router.get('/edit/:id', (req, res) => {

  const placeID = req.params.id

  Place
    .findById(placeID)
    .then(place => res.render('places/edit', place))
    .catch(err => console.log('Error:', err))  
})

router.post('/edit/:id', (req, res) => {
  
  const placeID = req.params.id

  const {name, type, latitude, longitude} = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .findByIdAndUpdate(placeID, {name, type, location})
    .then(() => res.redirect('/places'))
    .catch(err => console.log('Error:', err))  
})



module.exports = router
