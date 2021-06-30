require("dotenv/config")
require("./db")

const express = require("express")
const hbs = require("hbs")
const { capitalized } = require("./utils")
const app = express();

require("./config")(app)


const projectName = "lab-coffee-and-books"
app.locals.title = `${capitalized(projectName)} created with IronLauncher`


require("./routes/index")(app)
require("./error-handling")(app)

module.exports = app
