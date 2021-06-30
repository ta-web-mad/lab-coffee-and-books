const router = require("express").Router()

const Place = require('./../models/Place.model')



router.get("/create", (req, res, next) => res.render('places/new-place'))

router.post("/create", (req, res, next) => {

    const { name, type } = req.body



    Place
        .create({ name, type })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})




router.get("/list", (req, res, next) =>
    Place
        .find()
        .select('name')
        .then(places => res.render('places/places-list', { places }))
        .catch(err => console.log(err))
)

module.exports = router