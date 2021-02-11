const { response } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Place = require('../models/place')

// Endpoints
router.get('/places', (req, res) => {

  Place
    .find()
    .then(response => {
      console.log(response)

    })
    .catch(err => console.log(err))
})


module.exports = router
