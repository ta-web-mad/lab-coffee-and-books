// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");
const { get } = require("./routes/base.routes");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require("./routes")(app);//ENLAZO LA APP CON LAS RUTAS

const projectName = "lab-coffee-and-books";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

require("./error-handling")(app);

module.exports = app;
