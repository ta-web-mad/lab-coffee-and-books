const express = require("express")
const router = express.Router()
const Place = require("../models/place.model")

// Endpoints
router.get("/", (req, res) => res.render("index"))

router.get("/index", async (req, res, next) => {
  try {
    const placesList = await Place.find({ type: req.query.type }).select("name")
    console.log(process.env.API_KEY)
    res.render("list-index", {
      placesList,
      apiKey: process.env.API_KEY,
      type: req.query.type === "bookstore" ? "Bookstore" : "CoffeeShop",
    })
  } catch (err) {
    next(err)
  }
})

router.get("/new", (req, res) =>
  res.render("new-place", { type: req.query.type })
)

router.post("/new", async (req, res, next) => {
  const { name, latitude, longitude } = req.body
  const location = {
    type: "Point",
    coordinates: [latitude, longitude],
  }
  try {
    Place.create({ name, type: req.query.type, location })
    res.redirect("/")
  } catch (err) {
    next(err)
  }
})

router.get("/details/:id", async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id)
    let latitude, longitude
    if (place.location.coordinates)
      [latitude, longitude] = place.location.coordinates

    res.render("place-details", {
      place,
      latitude,
      longitude,
    })
  } catch (err) {
    next(err)
  }
})

router.get("/edit/:id", async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id)
    let latitude, longitude
    if (place.location.coordinates)
      [latitude, longitude] = place.location.coordinates

    res.render("edit-place", { place, latitude, longitude })
  } catch (err) {
    next(err)
  }
})

router.post("/edit/:id", async (req, res, next) => {
  const { name, latitude, longitude } = req.body
  const location = {
    type: "Point",
    coordinates: [latitude, longitude],
  }
  try {
    await Place.findByIdAndUpdate(
      req.params.id,
      { name, location },
      { omitUndefined: true }
    )
    res.redirect(`/details/${req.params.id}`)
  } catch (err) {
    next(err)
  }
})

router.post("/delete/:id", async (req, res, next) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete(req.params.id)
    res.redirect(`/index?type=${deletedPlace.type}`)
  } catch (err) {
    next(err)
  }
})
module.exports = router
