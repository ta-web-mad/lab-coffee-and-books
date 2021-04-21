
let map
function initMap() {

  map = new google.maps.Map(
    document.querySelector('#places-map'),
    { zoom: 14, center: { lat: 40.41717963845439, lng: - 3.7078603272307054 }, styles: mapStyles.silver }

  )
  getApiPlaces()
}


function getApiPlaces() {

  axios
    .get('/api/list')
    .then(res => showPlacesInMap(res.data))
    .catch(err => console.log('ERROR en funcion getApiPlaces', err))
}

function showPlacesInMap(places) {
  places.forEach(elm => {
    console.log('HOLAAAAA', elm);
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const title = elm.name
    new google.maps.Marker({ title, position, map })

  })

  map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })

}