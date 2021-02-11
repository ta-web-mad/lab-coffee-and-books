const { query } = require('express')
const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

router.get('/', (req, res) => {
  Place
    .find()
    .then(list => {
      // console.log('Esta es el listadooo', list)
      res.render('places-list', {list})
    })
    .catch(err => console.log(err))
})

router.get('/nuevo-lugar', (req, res) => res.render('places-new'))
router.post('/nuevo-lugar', (req, res) => {
  // console.log(req.body)
  const { name, type } = req.body
  Place
    .create({ name, type })
    .then(newPlace => {
      console.log('Se ha creado este lugar: ', newPlace)
      res.redirect('/lugares')
    })
    .catch(err => console.log(err))
})

router.get('/editar-lugar', (req, res) => {
  // console.log(req.query)
  const place_id = req.query.id
  Place
    .findById(place_id)
    .then(place => {
      // console.log('placeeeee', place)
      res.render('places-edit', place)
    })
    .catch(err => console.log(err))
})
router.post('/editar-lugar', (req, res) => {
  // console.log('queryyyyyyyyyyyyy', req.query.id)
  // console.log('bodyyyyyyyyyyyy', req.body)
  const place_id = req.query.id
  const {name, type} = req.body
  Place
    .findByIdAndUpdate(place_id, { name, type })
    .then(place => {
      // console.log('Se ha actualizado este lugar', place)
      res.redirect(`/lugares/detalles/${place_id}`)
    })
    .catch(err => console.log(err))
})

router.get('/detalles/:id', (req, res) => {
  // console.log('parammmmmmmm',req.params.id)
  const place_id = req.params.id
  Place
    .findById(place_id)
    .then(place => {
      // console.log(place)
      res.render('places-details', place)
    })
    .catch(err => console.log(err))
})

router.get('/delete', (req, res) => {
  // console.log('queyyyyyyyyyyyyy',req.query)
  const place_id = req.query.id
  Place
    .findByIdAndRemove(place_id)
    .then(place => res.redirect('/lugares'))
    .catch(err => console.log(err))
})




module.exports = router