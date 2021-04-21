const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')
const mongoose = require('mongoose')

//End Points

//Add GET New **/places/new-places
router.get('/new-place', (req, res) => res.render('pages/places/new-place'))

//Get List **/places
router.get('/', (req, res) => {
  
  Place.find()
  .then(data => res.render('pages/places/index', { data }))
  .catch(err => { console.log('Error!', err) })
})

//Show Details **/places/id
router.get('/:id', (req, res, next) => {

    const { id } = req.params

    Place.findById(id)
      .then(data => res.render('pages/places/details', data))
      .catch(err => { console.log('Error!', err) })
})

//Add POST New **/places/new-places
router.post('/new-place', (req, res) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place.create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

//Place edit GET
router.get('/edit-place/:id', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(data => res.render('pages/places/edit-place', data))
        .catch(err => console.log('Error!', err))
})


// Place edit (post)
router.post('/edit-place/:id', (req, res) => {

    const { id } = req.params
    const { name, description, latitude, longitude } = req.body

    Student
        .findByIdAndUpdate(id, { name, description, latitude, longitude })
        .then(data => res.redirect('/places'))
        .catch(err => console.log('Error!', err))
})

//Delete
router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Place.findByIdAndRemove(id)
        .then(() => res.redirect('/places'))
        .catch(err => { console.log('Error!', err)})
})



module.exports = router