const router = require("express").Router();

const Place = require('../models/place.model')

router.get('/place-list', (req, res) => {
  Place
    .find()
    .then(places => res.render('places/place-list', { places }))
    .catch(err => console.log('Error!', err))
})


// Create new places

router.get('/create-place', (req, res) => res.render('places/create-place'))

router.post('/create-place', (req, res) => {

  const {name,type,latitude,longitude} = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }


  Place
    .create({name,type,location})
    .then(() => {
      res.redirect('/places/place-list')
    })
    .catch(err => console.log(err))
})


router.post('/delete/:place_id', (req, res) => {

  const {place_id} = req.params

  Place
    .findByIdAndRemove(place_id)
    .then(() => res.redirect('/places/place-list'))
    .catch(err => console.log(err))
})

router.get('/edit/:place_id', (req, res) => {

  const {place_id} = req.params

  Place
    .findById(place_id)
    .then(place => res.render('places/edit-place', place))
    .catch(err => console.log(err))
})

router.post('/edit/:place_id', (req, res) => {
  const {name,type} = req.body
  const {place_id} = req.params

  Place
    .findByIdAndUpdate(place_id, {name,type})
    .then(place => res.redirect('/places/place-list'))
    .catch(err => console.log(err))
})

module.exports = router 

