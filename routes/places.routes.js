const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

// Endpoints


// Listado de lugares

router.get('/', (req, res) => {

  Place
    .find()
    .then(allPlaces => res.render('pages/places/places-list', { allPlaces }))
    .catch(err => console.log('Error!', err))

})


// Detalle del lugar


router.get('/detalle/:id', (req, res) => {

  Place

    .findById(req.params.id)
    .then(thePlace => res.render('pages/places/details', thePlace))
    .catch(err => console.log('Error!', err))
})


// Añadir nuevo lugar


router.get('/crear', (req, res) => res.render('pages/places/places-new-form'))


router.post('/crear', (req, res) => {

    const { name, type, latitude, longitude } = req.body  

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place

        .create({ name, type, location })      
        .then(() => res.redirect('/lugares'))
        .catch(err => console.log('Error!', err))
})


// Editar lugar


router.get('/editar', (req, res) => {

    const { place_id } = req.query

    Place

        .findById(place_id)
        .then(placeInfo => res.render('pages/places/place-edit-form', placeInfo))
        .catch(err => console.log('Error!', err))
})


router.post('/editar', (req, res) => {

    const { place_id } = req.query
    const { name, type, latitude, longitude } = req.body  // LOCATION

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place

        .findByIdAndUpdate(place_id , { name, type, location })  // LOCATION
        .then(placeInfo => res.redirect('/lugares'))
        .catch(err => console.log('Error!', err))
})



// Eliminar lugar


router.get('/delete/:id', (req, res) => { 

    const place_id  = req.params.id

    Place

        .findByIdAndRemove(place_id)
        .then(() => res.redirect('/lugares'))
        .catch(err => console.log('Error!', err))
})


module.exports = router