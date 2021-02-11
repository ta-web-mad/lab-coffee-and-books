let myMap

function initMap() {

  myMap = new google.maps.Map(
    document.querySelector('#map'),
    { zoom: 9, center: { lat: 43.408313, lng: - 2.698909 }, styles: mapStyles.retro }
  )

  getDirections()

}

function getDirections() {

  axios
    .get('/api/places')
    .then(response => pinPlaces(response.data))
    .catch(err => console.log(err))
}


function pinPlaces(places) {

  places.forEach(elm => {
    let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    new google.maps.Marker({ position, title: elm.title, map: myMap })
  })
}







// new google.maps.Marker({
  //   position: directions.casaPopino.coords,
  //   title: directions.casaPopino.title,
  //   map: myMap
  // })

  // new google.maps.Marker({
  //   position: directions.casaPepe.coords,
  //   title: directions.casaPepe.title,
  //   map: myMap
  // })

  // new google.maps.Marker({
  //   position: directions.coffeeShop.coords,
  //   title: directions.coffeeShop.title,
  //   map: myMap
  // })

  // new google.maps.Marker({
  //   position: directions.bookStore.coords,
  //   title: directions.bookStore.title,
  //   map: myMap
  // })

  // new google.maps.Marker({
  //   position: directions.ironhackGuethary.coords,
  //   title: directions.ironhackGuethary.title,
  //   map: myMap
  // })