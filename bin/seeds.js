const mongoose = require("mongoose")
const dbName = "coffee-and-books"

const Place = require("../models/place.model")

mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// const coffeShops = [
//   {
//     name: "cafecafe",
//     type: "coffee-shop",
//   },
// ]

// Place.create(coffeShops)
//   .then(() => mongoose.connection.close())
//   .catch((err) => console.log(`Following error occured: \n ${err}`))

const bookstores = [
  {
    name: "booksbooks",
    type: "bookstore",
  },
]
Place.create(bookstores)
  .then(() => mongoose.connection.close())
  .catch((err) => console.log(`Following error occured: \n ${err}`))
