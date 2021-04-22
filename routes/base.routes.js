const express = require('express')
const router = express.Router()
const Place = require("./../models/place.model")


// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/loc/list', (req, res) => {
  Place.find().then(data => res.render('pages/list-places', { data }))
    .catch(err => console.log('Error!', err))

})

router.get('/create', (req, res) => res.render('pages/form'))

router.post('/create', (req, res) => {
  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place.create({ name, type, location }).then(obj => res.redirect('/'))
    .catch(err => console.log('Error!', err))

})

router.get('/edit/:id', (req, res) => {
  const id = req.params.id

  Place.findById(id).then(elm => res.render('pages/edit-form', { elm })).catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {

  const id = req.params.id
  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place.findByIdAndUpdate(id, { name, type, location }).then(() => res.redirect('/'))
    .catch(err => console.log('Error!', err))

})

router.post('/delete/:id', (req, res) => {
  const { id } = req.params
  Place.findByIdAndDelete(id).then(() => res.redirect('/')).catch(err => console.log('Error!', err))
})

router.get('/maps', (req, res) => {

  Place
    .find()
    .then(elm => res.json(elm))
    .catch(err => console.log('soy un error DE SERVIDOR y salgo por la terminal!', err))
})


router.get('/ver', (req, res) => res.render('pages/maps'))

module.exports = router
