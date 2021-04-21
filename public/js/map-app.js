let map

function initMap() {

    map = new google.maps.Map(
        document.querySelector('#map'), { zoom: 14, center: { lat:40.46636513407853, lng: -3.8648800796034193}, styles: mapStyles.yellowHumanMade }
    )

    
    getApiPlaces()
}

function getApiPlaces() {
    axios.get('/api/places')
    .then(response => placesInMap(response.data))
    .catch(err => console.log('error:', err))
}

function placesInMap(places) {

  places.forEach(elm => {
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const title = elm.name
    new google.maps.Marker({ title, position, map })
  })

  map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}