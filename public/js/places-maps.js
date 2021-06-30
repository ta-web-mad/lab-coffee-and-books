function initMap() {
//creamos mapa
    const myMap = new google.maps.Map(
        document.querySelector('#placesMap'),//seleccionamos el id del hbs places Map para desplegar el mapa de todos
        { zoom: 12, center: { lat: 40.46236647427693, lng: -3.69112331687029 } }
    )

    getPlacesData(myMap)

    //mientras se despliega, vamos a tomar los datos de location de cada place desde la API de Google Maps mediante axios
}



function getPlacesData(myMap) {


    axios
        .get('/places/placeslisting')
        .then(response => response.data.forEach(elm => printMarker(elm.location, myMap)))
        .catch(err => console.log(err))

        //got places attributes from route as json and then we display a marker using location data provided
}

//to effectively positioning our markers, we need our map and our different places locations

function printMarker(location, myMap) {

    const { coordinates } = location

    new google.maps.Marker({
        map: myMap,
        position: { lat: coordinates[0], lng: coordinates[1] }
    })

    //marker positioning funcion
}