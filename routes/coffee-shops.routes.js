const express = require("express")
const router = express.Router()
const Place = require("../models/place.model")

router.get("/", async (req, res, next) => {
  try {
    const placesList = await Place.find({ type: "coffee shop" }).select("name")
    res.render("coffee-shops/coffee-shops-index", { placesList })
  } catch (err) {
    next(err)
  }
})

router.get("/new", (req, res) => res.render("coffee-shops/new"))

router.post("/new", async (req, res, next) => {
  const { name } = req.body
  const placeType = "coffee shop"
  try {
    Place.create({ name, type: placeType })
    res.redirect("/")
  } catch (err) {
    next
  }
})

module.exports = router
