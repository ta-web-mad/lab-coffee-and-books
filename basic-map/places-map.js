function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#placesList'),
        { zoom: 12, center: { lat: 40.392499, lng: -3.698214 } }
    )

    getRestaurantsData(myMap)
}