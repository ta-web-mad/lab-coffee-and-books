const express = require('express')
const router = express.Router()

const Place  = require('./../models/place.model')

// http://localhost:3000/api/lugares
router.get('/lugares', (req, res) => {

    Place

      .find()
      .then(place => res.json(place))
      .catch(err => console.log('soy un error DE SERVIDOR y salgo por la terminal!', err))
})


module.exports = router
