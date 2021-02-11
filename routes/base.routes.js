const express = require("express")
const router = express.Router()
const Place = require("../models/place.model")

// Endpoints
router.get("/", (req, res) => res.render("index"))

router.get("/index", async (req, res, next) => {
  const placeType =
    req.query.type === "coffee-shops" ? "coffee shop" : "bookstore"
  try {
    const placesList = await Place.find({ type: placeType }).select("name")
    res.render("list-index", { placesList })
  } catch (err) {
    next(err)
  }
})

router.get("/new", (req, res) => {
  const type = req.query.type
  res.render("new-place", { type })
})

router.post("/new", async (req, res, next) => {
  const placeType =
    req.query.type === "coffee-shops" ? "coffee shop" : "bookstore"
  const { name } = req.body
  try {
    Place.create({ name, type: placeType })
    res.redirect("/")
  } catch (err) {
    next(err)
  }
})

router.get("/details/:id", async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id)
    res.render("place-details", place)
  } catch (err) {
    next(err)
  }
})

router.get("/edit/:id", async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id)
    res.render("edit-place", place)
  } catch (err) {
    next(err)
  }
})

router.post("/edit/:id", async (req, res, next) => {
  const placeType =
    req.query.type === "coffee-shops" ? "coffee shop" : "bookstore"
  const { name } = req.body
  try {
    await Place.findByIdAndUpdate(
      req.params.id,
      { name },
      { omitUndefined: true }
    )
    res.redirect(`/details/${req.params.id}`)
  } catch (err) {
    next(err)
  }
})
module.exports = router
