const express = require('express')
const Place = require('../models/place.model')
const router = express.Router()

// Endpoints

// http://localhost:3000/api/places
router.get('/places', (req, res) => {

  Place
    .find()
    .then(places => res.json(places))
    .catch(err => console.log('soy un error DE SERVIDOR y salgo por la terminal!', err))
})



module.exports = router