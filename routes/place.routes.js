const router = require("express").Router()
const MAPS_KEY = process.env.MAPS_API_KEY;
const Place = require('./../models/place.model')
router.get("/", (req, res, next) => {
    Place
        .find()
        .then((places) => res.render('places/', { places, MAPS_KEY }))
        .catch((err) => console.error(err));
});
   

router.get("/crear",(req,res,next)=> res.render ("places/new-places"))
// console.log(Place)
router.post("/crear", (req,res,next)=>{
    
    const {name,spaces,lat,lng} = req.body

    const location ={
        type: 'Point',
        coordinates: [lat,lng]
    }

    Place
    .create({name,spaces,location})
    .then (() => res.redirect ('/lugar/lista'))
    .catch(err => console.log(err))

}) 

router.get("/lista", (req, res, next) => res.render("places/places-list"))

// router.delete("")
module.exports = router;