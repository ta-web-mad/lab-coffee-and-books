const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')

router.get('/list', (req, res) => {

  Place
  .find()
  .then(places => res.json(places))
  .catch(err => console.log('Error en la ruta de API', err))
})


module.exports = router
