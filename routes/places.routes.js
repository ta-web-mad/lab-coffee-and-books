const router = require("express").Router();

const Place = require("../models/place.model") // REQUIERO EL MODELO


//LISTADO DE LIBRERIAS
router.get('/', (req, res) => {

    Place
        .find()
        .select('name')
        .then(place => res.render('places', { place }))
        .catch(err => console.log(err))
})

//RUTA PARA CREAR LUGARES

router.get('/crear', (req, res, next) => {
    res.render('create-places');
})

router.post('/crear', (req, res, next) => {
    const { name, type } = req.body;

    Place
        .create(req.body)
        .then(() => res.redirect('/lugares'))
        .catch(() => res.render('create-places',
            { errorMessage: 'no se puede crear ese lugar' }))

})

//RUTA PARA VER LOS DETALLES
router.get('/detalles', (req, res) => {


    Place
        .find()
        .select('name')
        .then(place => res.render('places-detail', { place }))
        .catch(err => console.log(err))

})

module.exports = router