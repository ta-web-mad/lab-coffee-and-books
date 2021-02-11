const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/basic-map', (req, res) => res.render('basic-map'))


module.exports = router
