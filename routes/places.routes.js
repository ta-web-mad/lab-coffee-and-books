const router = require("express").Router();

const Place = require('../models/Place.model')

const API_KEY = process.env.API_KEY

/* GET home page */
router.get("/create", (req, res, next) => res.render('places/new-place'))

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [ latitude, longitude ]
    }

    Place
        .create({ name, type, location })
        .then( (el) => res.render('places/showAll') )
        .catch( (err) => console.log(err))
})


router.get('/showAll', (req, res) => res.render('places/showAll', {API_KEY}))
// router.get('/showAll', (req, res) => console.log(API_KEY))

module.exports = router