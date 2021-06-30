const router = require("express").Router();


//homepage
router.get("/", (req, res, next) => {
    res.render("index");
});


module.exports = router