const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/map', (req, res) => {
  res.render('pages/map')
})

module.exports = router