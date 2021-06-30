function initMap() { 


    const myMap = new google.maps.Map(
        document.querySelector('#placesMap'),
        {
            zoom: 6,
            center: directions.ironhackMAD.coords,
            styles: mapStyles.silver
        }
    )


    getPlacesData(myMap)

}

function getPlacesData(myMap){
    axios.get('/api/places')
        .then( response => {
            response.data.forEach( elem => printMarker(elem.name, elem.location, myMap) )

        })
        .catch( err => console.log(err))

}

function printMarker(name, location, myMap){

    const { coordinates } = location

    new google.maps.Marker({        
        map: myMap,
        position: {lat: coordinates[0], lng: coordinates[1]},
        label: {
            fontSize: "5pt",
            text: name
        }
    })


}