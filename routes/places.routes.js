const router = require("express").Router();
const Places = require('../models/place')

//places list
router.get("/placeslisting", (req, res, next) => {

    Places

        .find()
        .then(places => res.render('places/places-listing', { places }))
        .catch(err => console.log(err))
});

//create a place

router.get('/placesform', (req, res) => {

    res.render('places/placesform')
})

router.post('/placesform', (req, res) => {

  

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
  const { name, type } = req.body
    Places

        .create({ name, type, location })

        // para redirigir, ponemos .. para volver al directorio, e indicarle después que vaya a Movies
        .then((places) => res.render('places/places-listing', { places: places }))
        .catch(err => (console.log(err), res.redirect('/places/placesform')))
})


//Delete a place

router.post('/deleteplace/:id', (req, res) => {

    const { id } = req.params

    Places

        .findByIdAndRemove(id)
        .then(() => res.redirect('/places/placeslisting'))
        .catch(err => console.log(err))
})



//Edit place

router.get('/editplace/:id', (req, res) => {


    const { id } = req.params

    Places

        .findById(id)
        .then((places) => res.render('places/placesformedit', places))

})

//POST, ENVIAR LOS DATOS EDITADOS A LA BASE DE DATOS Y VOLVEMOS AL LISTADO UNA VEZ PULSAMOS 'EDIT CELEBRITY'

router.post('/editplace/:id', (req, res) => {

    const { id } = req.params
    const { name, type, lat, lng} = req.body
   

    Places

        .findByIdAndUpdate(id, { name, type, lat, lng })

        .then(() => res.redirect('/places/placeslisting'))
        .catch(err => console.log(err))
})




module.exports = router