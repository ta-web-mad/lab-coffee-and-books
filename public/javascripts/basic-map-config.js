
function initMap() {

  const myMap = new google.maps.Map(
      document.querySelector('#map'),
      { zoom: 10, center: directions.ironhackMAD.coords, styles: mapStyles.retro }
  )

  new google.maps.Marker({
      position: directions.ironhackMAD.coords,
      title: directions.ironhackMAD.title,
      map: myMap
  })

  new google.maps.Marker({
    position: directions.libreriaTomas.coords,
    title: directions.libreriaTomas.title,
    map: myMap
  })
  
  new google.maps.Marker({
    position: directions.libreriaTom.coords,
    title: directions.libreriaTom.title,
    map: myMap
  })
  
  new google.maps.Marker({
    position: directions.cafeteriaAveMaria.coords,
    title: directions.cafeteriaAveMaria.title,
    map: myMap
  })
  
  new google.maps.Marker({
    position: directions.cafeteriaManuel.coords,
    title: directions.cafeteriaManuel.title,
    map: myMap
})
}