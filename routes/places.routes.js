const Places = require('../models/Places.model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Places.find()
        .then(places => {
            res.render('places/list-places', { places })
        })
        .catch(err => console.log(err))
})

//

// Create place form

router.get('/create', (req, res) => res.render('places/create-place'))

//
// Create place logic
router.post('/create', (req, res) => {
    const { name, lat, lng } = req.body

    const location = {
        coordinates: [lat, lng],
    }

    Places.create({ name, location })
        .then(place => res.redirect('/places'))
        .catch(err => console.log(err))
})

//

//
//

// Edit places form

router.get('/edit', (req, res) => res.render('places/edit-places'))

//
// Edit places logic

router.post('/edit', (req, res) => {
    const { name, lat, lng, id } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng],
    }

    Places.findByIdAndUpdate(id, { name, location }, { new: true })
        .then(place => res.redirect('/places'))
        .catch(err => console.log(err))
})

//

//

//delete

router.get('/delete/:id', (req, res) => {
    const { id } = req.params

    Places.findByIdAndDelete(id)
        .then(place => res.redirect('/places'))
        .catch(err => console.log(err))
})

//

// api rest register

router.get('/api/all', (req, res) => {
    Places.find()
        .then(place => res.json(place))
        .catch(err => console.log(err))
})

router.get('/api/:id', (req, res) => {
    const { id } = req.params

    Places.findById(id)
        .then(place => res.json(place))
        .catch(err => console.log(err))
})

//

// lista details

router.get('/:id', (req, res) => {
    const { id } = req.params

    Places.findById(id)
        .then(place => res.render('places/details-place', place))
        .catch(err => console.log(err))
})
module.exports = router
