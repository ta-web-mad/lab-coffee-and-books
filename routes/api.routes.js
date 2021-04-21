const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')

// http://localhost:3000/api/places
router.get('/places', (req, res) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log('Error:', err))
})


module.exports = router