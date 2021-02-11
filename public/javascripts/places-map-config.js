let map

function initMap() {

  const directionsService = new google.maps.DirectionsService()
  const directionsRenderer = new google.maps.DirectionsRenderer()

  map = new google.maps.Map(
    document.querySelector('#places-map'),
    {
      zoom: 14, center: { lat: 40.43729612052753, lng: -3.688481814269885 }, styles: mapStyles.retro
    }
  )

  getDirections()

  directionsRenderer.setMap(map)

  // Teo, te dejo esto abajo para que veas que ha habido refactoring del bueno ;) aunque sé que me vas a decir que lo podría haber sacado a otro archivo....

  // document.getElementById('start').addEventListener('change', event => {
  //   let coordinates = event.target.value.split(',')
  //   start = new google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1]))
  // })

  // document.getElementById('end').addEventListener('change', event => {
  //   let coordinates = event.target.value.split(',')
  //   end = new google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1]))

  document.getElementById('calculate').addEventListener('click', () => {

    const start = setCoordinates('start')
    const end = setCoordinates('end')
    console.log(start)
    const request = { origin: start, destination: end, travelMode: 'WALKING' }

    directionsService.route(request, (result, status) => {
      if (status == 'OK') { directionsRenderer.setDirections(result) }
    })
  })

}

function setCoordinates(place) {
  let coordinates = document.getElementById(place).value.split(',')
  return new google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1]))
}

function getDirections() {

  axios
    .get('/api/places')
    .then(places => {
      pinPlaces(places.data)
      let optionsArray = `<option selected>Elige una opción</option>`
      places.data.forEach(elm => {
        optionsArray += `<option value="${elm.location.coordinates}">${elm.name}</option>`
      })
      document.getElementById('start').innerHTML = optionsArray
      document.getElementById('end').innerHTML = optionsArray
    })
    .catch(err => console.log(err))
}


function pinPlaces(places) {

  const markerImg = {
    url: 'https://media-exp1.licdn.com/dms/image/C4D03AQFFOE2nvmuHmg/profile-displayphoto-shrink_800_800/0/1558437077574?e=1617840000&v=beta&t=ecXm2Pr-iU7Q7y1FyaxMci0Gi7xUydAlgdk8HW9ky6o',
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 32),
    scaledSize: new google.maps.Size(40, 40)
  }

  places.forEach(elm => {
    let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    new google.maps.Marker({ position, title: elm.name, map, icon: markerImg })
  })
}