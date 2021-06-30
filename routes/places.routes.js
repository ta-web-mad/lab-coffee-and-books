const router = require("express").Router()
const Place = require('./../models/place.model')


router.get('/', (req, res) => {


    Place
        .find()
        .then(places => res.render('places/place-list', { places }))
        .catch(err => console.log(err))
})

//Create Place and Render
router.post('/create', (req, res) => {

    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})


router.get('/create', (req, res) => {

    res.render('places/place-create')

})


// Edit Place and Render

router.post('/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

// Delete Place

router.get('/:id/delete', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndRemove(id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})


module.exports = router