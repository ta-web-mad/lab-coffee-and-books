const router = require("express").Router()

const Place = require('../models/Place.model')
const TypeOfPlace = require('../models/TypeOfPlaces.model')

router.get("/crear", (req, res, next) => {

    TypeOfPlace
        .find()
        .then(places => res.render('places/new-place', { places }))
        .catch(err => console.log(err))
})

router.post("/crear", (req, res, next) => {

    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    console.log(req.body)
    Place
        .findOne({ name })
        .then(name => {

            if (name) {
                res.render('places/new-place', { errorMessage: 'Establecimiento  ya registrado' })
                return
            }

            Place
                .create({ name, type, location })
                .then(() => res.redirect('/'))
                .catch(err => console.log(err))
        })

        .catch(err => console.log(err))
})

router.get("/lista", (req, res, next) => res.render("places/places-list"))

module.exports = router