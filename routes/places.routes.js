const router = require("express").Router()
const Place = require('./../models/Place.model')

router.get("/create", (req, res, next) => res.render("places/new-place"))

router.post("/create", (req, res, next) => {

    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})


// Places list
router.get('/list', (req, res) => {


    Place
        .find()
        .select('name')
        .then(places => {
            res.render('places/places-list', { places })
        })
        
        .catch(err => console.log(err))
})

// Edit place
router.get('/edit/:id', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/edit-place', place))
        
        .catch(err => console.log(err))
})


router.post('/edit/:id',  (req, res) => {

    const { id } = req.params
    const { name, type, location } = req.body

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})


module.exports = router
