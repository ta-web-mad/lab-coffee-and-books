const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

router.get('/places', (req, res) => {

  Place
    .find()
    .then(response => response.length ? res.json(response) : res.status(204).json({ status: 204, message: 'No restaurants found' }))
    .catch(err => res.status(500).json({ status: 500, message: err }))
})

module.exports = router