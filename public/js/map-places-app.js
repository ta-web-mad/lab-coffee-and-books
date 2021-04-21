let map

function initMap() {
  map = new google.maps.Map(
    document.querySelector('#map'), {
      zoom: 10,
      center: {
        lat: 29.75848080764006,
        lng: -95.35875241711342
      },
      styles: mapStyles.retro
    }
  )
  getApiPlaces()
}

function getApiPlaces() {
  axios
    .get('/api/places')
    .then(res => putPlacesInMap(res.data))
    .catch(err => console.log('CLIENT ERROR:', err))
}

function putPlacesInMap(places) {

  places.forEach(elm => {
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const elmType = elm.type
    //const icon = setIcon(elm) //No logre añadir iconos personalizados...
    const title = elm.name
    new google.maps.Marker({ position, /*icon,*/ map, title, })
  })

  map.setCenter({
    lat: places[0].location.coordinates[0],
    lng: places[0].location.coordinates[1]
  })
}



//Intente añadir iconos...
function setIcon(place){
  switch (place.type) {
    case 'CoffeeShop':
      return '../../public/img/coffeeIcon.png'
    case 'Bookstore':
      return '../../public/img/bookIcon.png'
  }
}