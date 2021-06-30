const router = require("express").Router()

const Place = require('./../models/Place.model')



router.get("/create", (req, res) => res.render('places/new-place'))

router.post("/create", (req, res) => {

    const { name, type } = req.body



    Place
        .create({ name, type })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})



/*GET list */
router.get("/list", (req, res) =>
    Place
        .find()
        .select('name type id')
        .then(places => res.render('places/places-list', { places }))
        .catch(err => console.log(err))
)
/*GET details */
router.get("/details/:place_id",
    (req, res) => {
        const { place_id } = req.params

        Place
            .findById(place_id)
            .select('name type id')
            .then(place => res.render('places/place-details', place))
            .catch(err => console.log(err))
    })
/*POST delete */
router.post('/delete/:place_id', (req, res) => {

    const { place_id } = req.params
    Place
        .findByIdAndRemove(place_id)
        .then(() => res.redirect('/places/list'))
})
/*GET edit */
router.get('/edit', (req, res) => {
    const { place_id } = req.query
    Place
        .findById(place_id)
        .then(place => res.render('places/edit-place', place))
        .then(console.log(place_id))
        .catch(err => console.log(err))
})
/*POST edit */
 router.post('/edit', (req, res) => {

    const { place_id } = req.query
    const { name, type } = req.body


    Place
        .findByIdAndUpdate(place_id, { name , type })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

module.exports = router