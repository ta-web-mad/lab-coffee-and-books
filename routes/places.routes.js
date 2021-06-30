const router = require("express").Router();

const Place = require('../models/Place.model')

const API_KEY = process.env.API_KEY

/* GET home page */
router.get("/create", (req, res, next) => res.render('places/new-place'))

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [ latitude, longitude ]
    }

    Place
        .create({ name, type, location })
        // .then( (el) => res.render('places/showAll') )
        .then( () => res.redirect('/places/showAll'))
        .catch( (err) => console.log(err))
})


// router.get('/showAll', (req, res) => res.render('places/showAll', {API_KEY}))
router.get('/showAll', (req, res) => {
    Place
        .find()
        .then( movies => {
            res.render('places/showAll', {API_KEY, movies})
        })

    
} )

router.post('/:id/delete', (req, res) => {
    const {id} = req.params
    Place
        .findByIdAndRemove(id)
        .then( () => res.redirect('/places/showAll'))
        .catch( (err) => console.log(err))
})


router.get("/:id/edit",  (req, res, next) => {
    const {id} = req.params
    console.log("*************************** 1", id)

    Place
        .findById(id)  
        .then( place => { 
            const latitude = place.location.coordinates[0]
            const longitude = place.location.coordinates[1]
            const {name, type } = place
            console.log( "**************** 2", {id, name, type, latitude, longitude})
            res.render('places/edit-place', {id, name, type, latitude, longitude} )

        }   )
});

router.post('/:id/edit', (req, res) => {
    const {id} = req.params
    console.log("*************************** 3", id)
    const{ name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [ latitude, longitude ]
    }

    Place
        .findByIdAndUpdate(id, {name, type, location} )
        .then( () => res.redirect('/places/showAll'))
        .catch( (err) => console.log(err))

})







module.exports = router