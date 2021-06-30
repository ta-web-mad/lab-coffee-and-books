require('dotenv/config')
const mongoose = require('mongoose')
require('./index')

const Place = require('../models/Places.model')

const places = [
    {
        name: 'Edgar Catasus',
        location: {
            type: 'Point',
            coordinates: [39.47582072533921, -0.38373618730572157],
        },
    },
    {
        name: 'Ubik cafe',
        location: {
            type: 'Point',
            coordinates: [39.4605603460951, -0.3738729443991216],
        },
    },
    {
        name: 'Slaughterhouse',
        location: {
            type: 'Point',
            coordinates: [39.4635046901708, -0.3742528020714843],
        },
    },
    {
        name: 'Cappuccino Grand Cafe',
        location: {
            type: 'Point',
            coordinates: [39.474024095864664, -0.3750923578901704],
        },
    },
    {
        name: 'L’espresso Cafe',
        location: {
            type: 'Point',
            coordinates: [39.47303985273627, -0.37149471741603896],
        },
    },
]

Place.create(places)
    .then(places => mongoose.connection.close())
    .catch(err => console.log(err))

mongoose.connection.on('disconnected', () => console.log('Tarea completada, desconectando'))
