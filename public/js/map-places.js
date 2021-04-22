let map

function initMap() {

  map = new google.maps.Map(
    document.querySelector('#places-map'),
    { zoom: 14, center: { lat: 40.392499, lng: -3.698214 }, styles: mapStyles.silver }
  )
  getApiPlaces()
}

function getApiPlaces() {

  axios
    .get('/api/places')
    .then(res => placesInMap(res.data))
    .catch(err => console.log('Error!', err))
}

function placesInMap(places) {

  places.forEach(elm => {
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const title = elm.name
    new google.maps.Maker({ title, position, map })
  })

  map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}