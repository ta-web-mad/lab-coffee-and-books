function initMap() {

  new google.maps.Map(
    document.querySelector('#map'),
    { zoom: 14, center: { lat: 40.392499, lng: -3.698214 }, styles: mapStyles.yellowHumanMade }
  )
}

function getApiPlaces() {
  axios.get('/maps').then(res => placeRestaurantsInMap(res.data))
    .catch(err => console.log('ERROR EN CLIENTE OBTENIENDO LOS RESTAURANTES', err))
}

function placeRestaurantsInMap(restaurants) {

  restaurants.forEach(elm => {
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const title = elm.name
    new google.maps.Marker({ title, position, map })
  })

  map.setCenter({ lat: restaurants[0].location.coordinates[0], lng: restaurants[0].location.coordinates[1] })
}