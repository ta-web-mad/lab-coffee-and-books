const express = require('express')
const router = express.Router()
const Place = require("../models/place.model")

router.get('/', (req, res) => res.render('index'))

router.get('/register-place', (req, res) => res.render('register'))

router.post('/register-place', (req, res, next) => {

  const { name, type, latitude, longitude } = req.body

  Place
    .create({ name, type, location: { type: 'Point', coordinates: [latitude, longitude] } })
    .then(place => res.redirect('/'))
    .catch(err => next(new Error(err)))
})

router.get('/see-places', (req, res) => res.render('places'))

module.exports = router