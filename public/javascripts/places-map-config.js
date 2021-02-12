let map

function initMap() {
  map= new google.maps.Map(
    document.querySelector('#places-map'),
    {zoom: 12, center: { lat: 40.45292, lng: -3.68125}}
  )
  getDirections()
}

function getDirections() {

  axios
    .get('/api/places')
    .then(response => putMarkers(response.data))
    .catch(err => console.log('Error:', err))
}

function putMarkers(placesArr) {

  placesArr.forEach(elm => {
    let position = {lat: elm.location.coordinates[0], lng: elm.location.coordinates[1]}
    new google.maps.Marker({position, title: elm.name, map})
  })
}