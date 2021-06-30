const router = require("express").Router();


const Place = require('../models/place.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get("/create", (req, res, next) => {
  res.render("create");
});

router.get("/map", (req, res, next) => {
  res.render("map");

  Place
    .find()
    .then(places => res.json(places))
    .catch(err => console.log(err))

});

router.post('/create', (req, res) => {

  const { name, type, lat, lng } = req.body  ////////////////////////////

  console.log("hola")
  console.log(req.body)
  console.log(name, type, lat, lng)
  console.log()

  const location = {
    type: 'Point',
    coordinates: [lat, lng]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})


module.exports = router;
