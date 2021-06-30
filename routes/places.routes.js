const router = require("express").Router()
const Place = require('./../models/place.model')


//Places list
router.get('/', (req, res) => {

    Place
        .find()
        .select('name')
        .then(places => res.render('places/places-list', { places }))
        .catch(err => console.log(err))
})

//Place details
router.get('/:id', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/details-place', place))
        .catch(err => console.log(err))
})


//Render Create Place
router.get('/create', (req, res) => {

    Place
        .find()
        .then(places => res.render('places/new-place', { places }))
        .catch(err => console.log(err))
})


//Create Place
router.post('/create', (req, res) => {

    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

// Render Edit Place 
router.get('/:id/edit', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/edit-place', place))
        .catch(err => console.log(err))
})

// Edit Place
router.post('/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

//Place Delete
router.get('/:id/delete', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndRemove(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})


module.exports = router