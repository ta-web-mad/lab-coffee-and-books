const express = require("express")
const router = express.Router()
const Place = require("../models/place.model")

router.get("/", async (req, res, next) => {
  try {
    const placesList = await Place.find({ type: "bookstore" }).select("name")
    res.render("display-list/bookstores", { placesList })
  } catch (err) {
    next(err)
  }
})
module.exports = router
