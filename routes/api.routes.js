const express = require('express')
const router = express.Router()

const Places = require('./../models/place.model')

router.get('/places', (req, res) => {

  Places
    .find()
    .then(places => res.json(places))
    .catch(err => console.log('Error!', err))
})

module.exports = router