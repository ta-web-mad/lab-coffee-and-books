const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

router.get('/list', (req, res) => res.render('pages/places/places-list'))

router.get('/create', (req, res) => res.render('pages/places/new-places'))
router.post('/create', (req, res) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: "Point",
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/places/list'))
    .catch(err => console.log('Error!', err))
})



module.exports = router