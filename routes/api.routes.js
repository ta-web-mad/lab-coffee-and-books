const router = require("express").Router()

const Restaurant = require('./../models/Place.model')


router.get('/places', (req, res) => {

    Restaurant
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
})


module.exports = router