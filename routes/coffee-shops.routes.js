const express = require("express")
const router = express.Router()
const Place = require("../models/place.model")

// Endpoints
router.get("/", (req, res, next) => {
  Place.find({ type: "coffee shop" })
    .select("name")
    .then((placesList) =>
      res.render("display-list/coffee-shops", { placesList })
    )
    .catch((err) => next(err))
})

module.exports = router
