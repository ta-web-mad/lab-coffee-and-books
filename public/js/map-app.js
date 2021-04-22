let map

function initMap() {

  map = new google.maps.Map(
    document.querySelector('#coffee-map'),
    { zoom: 14, center: { lat: 40.392499, lng: -3.698214 }, styles: mapStyles.silver }
  )
  getApiCoffeeShops()
}

function getApiCoffeeShops() {
  //console.log(res.data)
  axios
    .get('/api/cafeterias')
    .then(res => placeCoffeeShops(res.data))
    .catch(err => console.log('error', err))
}


 function placeCoffeeShops(coffee){
  console.log(coffee, "los coffee")

  coffee.forEach(elm => {
    const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    const title = elm.name
    console.log(position, title)
    new google.maps.Marker({ title, position, map })
  });
   map.setCenter({ lat: restaurants[0].location.coordinates[0], lng: restaurants[0].location.coordinates[1] })
 }


 

