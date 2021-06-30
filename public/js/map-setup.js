function initMap() {


    const myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 10,
            center: { lat: 40.392721, lng: -3.698275 },
            styles: mapStyles.silver
        }
    )

}