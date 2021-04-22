const express = require('express')
const router = express.Router()

const CoffeeShop = require('./../models/place.model')

router.get('/cafeterias', (req, res) => {

  CoffeeShop
    .find()
    .then(coffee => res.json(coffee))
    .catch(err => console.log('soy un error DE SERVIDOR y salgo por la terminal!', err))
})

module.exports = router