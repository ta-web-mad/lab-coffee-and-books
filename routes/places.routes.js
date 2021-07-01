const router = require("express").Router()
const Place = require('./../models/Places.model')

router.get('/create', (req, res) => res.render('places/new-place'))

router.post('/create', (req, res) => {

  const { name, type, lat, lng } = req.body

  const location = {
    type: 'Point',
    coordinates: [lat, lng]
}

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/places/list'))
    .catch(err => console.log('An has ocurred when adding a new place', err))
})

router.get('/list', (req, res) => {

    Place
      .find()
      .select('name')
      .then(places => res.render('places/places-list', { places }))
      .catch(err => console.log(err))
  })

  router.get('/details/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(team => res.render('places/places-details', team))
        .catch(err => console.log('An has ocurred when showing a place details', err))
})

router.get('/details/:place_id/delete', (req, res) => res.render('places/places-list'))

router.post('/details/:place_id/delete', (req, res) => {

    const { place_id } = req.params

    Place
        .findByIdAndRemove(place_id)
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log('An has ocurred when deleting a place', err))
})

router.get('/edit/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('places/edit-places', place))
        .catch(err => console.log(err))

})


router.post('/edit/:place_id', (req, res) => {

    const { place_id } = req.params
    
    const { name, type, lat, lng } = req.body

    const location = {
      type: 'Point',
      coordinates: [lat, lng]
  }


    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log('An has ocurred when editing a place', err))
})


module.exports = router