const router = require("express").Router()

// PAGINA DE INICIO
router.get("/", (req, res) => res.render("index"))



module.exports = router