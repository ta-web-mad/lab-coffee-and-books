// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
const { capitalized } = require('./utils')
require('dotenv/config')
require('./db')

const express = require('express')
const hbs = require('hbs')
const app = express()

require('./config')(app)

app.locals.title = `${capitalized('lab-coffee-and-books')} created with IronLauncher`
app.locals.myApiCode = process.env.apiGMAPS

require('./routes')(app)
require('./error-handling')(app)

module.exports = app
