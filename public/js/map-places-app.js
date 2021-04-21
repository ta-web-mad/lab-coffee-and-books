let map

function initMap() {

  map = new google.maps.Map(
    document.querySelector('#places-map'),
    { zoom: 14, center: { lat: 40.7, lng: -3.6998325 }, styles: mapStyles.custom }
  )
  getApiPlaces()
}

function getApiPlaces() {

  console.log(axios)

  axios
    .get('/api/places')
    .then(res => placesInMap(res.data))
    .catch(err => console.log('Error:', err))
}


function placesInMap(places) {

  places.forEach(elm => {

    if (elm.type === 'bookstore') {
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const label = {
      text: elm.name,
    }
    const icon = {
      url: '../img/book-icon.png',
      size: new google.maps.Size(32,32),
      labelOrigin: new google.maps.Point(15, -15),
    }
    new google.maps.Marker({ position, label, map, icon})
    } else if (elm.type === 'coffee shop') {
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const label = elm.name
    const icon = {
      url: '../img/coffee-icon.png',
      labelOrigin: new google.maps.Point(15, -15),
      size: new google.maps.Size(32,32),
      anchor: new google.maps.Point(16,32)
    }
    new google.maps.Marker({ position, label, map, icon})
    }

  })

  // // I tried to design a route 
  
  // const origin = {lat: places[1].location.coordinates[0], lng: places[1].location.coordinates[0]}
  // const destination = {lat: places[2].location.coordinates[0], lng: places[2].location.coordinates[0]}

  // console.log(origin, destination)

  // const routeDetails = {
  //       origin: origin,
  //       destination: destination,
  //       travelMode: 'WALKING'
  //   }

  //   console.log(routeDetails)
  // getRouteDetails(routeDetails)

  // function getRouteDetails(details) {
  //   const directionsService = new google.maps.DirectionsService
  //   directionsService.route(details, routeInfo => {
  //       renderRoute(routeInfo)
  //   })
  // }

  // function renderRoute(routeInfo) {

  //   const directionsDisplay = new google.maps.DirectionsRenderer
  //   directionsDisplay.setDirections(routeInfo)
  //   directionsDisplay.setMap(map)
  // }

  map.setCenter({ lat: places[2].location.coordinates[0], lng: places[0].location.coordinates[1] })
}