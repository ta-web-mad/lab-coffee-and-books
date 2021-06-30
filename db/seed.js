require("dotenv/config")

require('./index')


const mongoose = require('mongoose');
const TypeOfPlaces = require('../models/TypeOfPlaces.model');



TypeOfPlaces.collection.drop();


const places = [
    {
        type2: "Coffee shop",

    },
    {
        type2: "Bookstore",

    }


]

TypeOfPlaces
    .create(places)
    .then(places => console.log(`Se han creado ${places.length} stores`))
    .catch(error => console.log('¡Ha habido un error!:', error))