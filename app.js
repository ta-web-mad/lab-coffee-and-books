require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const {capitalized} = require('./utils')
const projectName = "lab-coffee-and-books";
app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
require("./routes/index")(app)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
