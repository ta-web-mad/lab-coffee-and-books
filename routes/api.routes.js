const express = require('express')
const router = express.Router()
const Place = require('./../models/place.model')

router.get('/places', (req, res) => {
  Place
    .find()
    .then(places => res.json(places))
    .catch(err => console.log('SERVER ERROR:', err))
})


module.exports = router