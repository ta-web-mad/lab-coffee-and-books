function initMapBookstore() {
  axios
    .get("/api/places?type=bookstore")
    .then((response) => pinPlaces(response.data))
    .catch((err) => console.log(err))
}

function initMapCoffeeShop() {
  axios
    .get("/api/places?type=coffee-shop")
    .then((response) => pinPlaces(response.data))
    .catch((err) => console.log(err))
}

function pinPlaces(places) {
  const center = { lat: 40.392499, lng: -3.698214 }
  for (let i = 0; i < places.length; i++) {
    const elm = places[i]
    if (elm.location) {
      center.lat = elm.location.coordinates[0]
      center.lng = elm.location.coordinates[1]
      break
    }
  }

  const map = new google.maps.Map(document.querySelector("#map"), {
    zoom: 10,
    center,
  })

  places.forEach((elm) => {
    if (elm.location) {
      let position = {
        lat: elm.location.coordinates[0],
        lng: elm.location.coordinates[1],
      }
      new google.maps.Marker({ position, title: elm.title, map })
    }
  })
}
