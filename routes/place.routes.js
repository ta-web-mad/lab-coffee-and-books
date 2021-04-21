const express = require('express')
const router = express.Router()
const Place = require('./../models/place.model')

// Endpoints

// List
router.get('/list', (req, res) => {

  Place
    .find()
    .then(allPlaces => {
      res.render('pages/list-places', { allPlaces })
    })
    .catch(err => console.log('Error!', err))
})

//Create

router.get('/new-place', (req, res) => res.render('pages/new-place-form'))


router.post('/new-place', (req, res) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/place/list'))
    .catch(err => console.log('Error!', err))
})

//Delete

router.post('/delete/:place_id', (req, res) => {
  const { place_id } = req.params
  console.log(place_id);
  Place
    .findByIdAndRemove(place_id)
    .then(() => res.redirect('/place/list'))
    .catch(err => {
      next();
      console.log('Error!', err)
    })
})

//Edit

router.get('/edit/:place_id', (req, res) => {
  const { place_id } = req.params
  Place
    .findById(place_id)
    .then(place => res.render('pages/edit-place-form', place))
    .catch(err => console.log('Error!', err))
})


router.post('/edit/:place_id', (req, res) => {

  const { place_id } = req.params
  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }



  Place
    .findByIdAndUpdate(place_id, { name, type, location })
    .then(editField => res.redirect('/place/list'))
    .catch(err => console.log('Error!', err))
})

module.exports = router
