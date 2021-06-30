const router = require("express").Router();



//me sale error constante en la consola de este tipo que no sé entender:
//ERROR GET /maps/map Error: Cannot find module 'map'

router.get('/map', (req,res)=> res.render('maps/basic.map'))



module.exports = router