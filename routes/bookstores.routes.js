const express = require("express")
const router = express.Router()
const Place = require("../models/place.model")

router.get("/", async (req, res, next) => {
  try {
    const placesList = await Place.find({ type: "bookstore" }).select("name")
    res.render("bookstores/bookstores-index", { placesList })
  } catch (err) {
    next(err)
  }
})

router.get("/new", (req, res) => res.render("bookstores/new"))

router.post("/new", async (req, res, next) => {
  const { name } = req.body
  const placeType = "bookstore"
  try {
    Place.create({ name, type: placeType })
    res.redirect("/")
  } catch (err) {
    next
  }
})

module.exports = router
