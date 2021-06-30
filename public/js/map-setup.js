function initMap() {


    const myMap = new google.maps.Map(
        document.querySelector('#initialMap'),
        {
            zoom: 16,
            center: directions.landingMap.coords,
            styles: mapStyles.silver
        }
    )

    

}