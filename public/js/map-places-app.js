let map

function initMap() {

  map = new google.maps.Map(
    document.querySelector('#places-map'),
    { zoom: 13, center: { lat: 40.416652, lng: -3.703772 }, styles: mapStyles.retroLowLandmarks }
  )
  getApiPlaces()
}


function getApiPlaces() {

  axios
    .get('/api/places')
    .then(places => placesInMap(places.data))
    .catch(err => console.log('ERROR EN CLIENTE OBTENIENDO LOS RESTAURANTES', err))
}


function placesInMap(places) {

  places.forEach(elm => {
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const title = elm.name
    const marker = new google.maps.Marker({
      title,
      position,
      map,
      icon: {
        url: '/img/logo-ironhack-blue.png',
        scaledSize: new google.maps.Size(25, 25)
      }
    })

    const contentString = `<h3>Name: ${elm.name}</h3>
    <h4><b>Type: ${elm.type}</b></h4> 
    <p>Location: Lat(${elm.location.coordinates[0]}) Long(${elm.location.coordinates[1]})</p>`

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

  })

  map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}
