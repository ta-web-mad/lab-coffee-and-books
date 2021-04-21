require('dotenv').config()
const express = require('express')
const router = express.Router()

const Place = require("./../models/place.model")

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))


// Create a new place (GET)
router.get('/create', (req, res) => res.render('pages/create-form'))



// Create a new place (POST)
router.post('/create', (req, res) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(newObject => {
            res.redirect('/')
            // console.log(newObject)
        })
        .catch(err => console.log(err))
})



// Places list
router.get('/api/places-list', (req, res) => {

    Place
        .find()
        .then(allPlaces => res.render("pages/places-list", { allPlaces, key: process.env.APIKEY }))
        .catch(err => console.log('Error!', err))
})


router.get('/places-list', (req, res) => {

    Place
        .find()
        .then(allPlaces => res.json(allPlaces))
        .catch(err => console.log('Error!', err))
})



// Edit a place (GET)
router.get('/edit/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('pages/place-edit', { place }))
        .catch(err => console.log('Error!', err))
})



// Edit a place (POST)
router.post('/edit/:place_id', (req, res) => {

    const { place_id } = req.params
    const { name, type, latitude, longitude } = req.body

    let updateFields = { name, type }

    updateFields.location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(place_id, updateFields)
        .then(() => res.redirect(`/api/places-list`))
        .catch(err => console.log('Error!', err))
})



// Delete (POST)
router.post('/delete/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect(`/api/places-list`))
        .catch(err => console.log('Error!', err))
})



module.exports = router