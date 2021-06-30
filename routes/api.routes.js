const router = require("express").Router()

const Places = require('../models/place')

//get places data from DDBB to provide as Json (to then select location data on places-maps.js getPlacesData(myMap)


router.get('/placeslocations', (req, res) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
})



module.exports = router