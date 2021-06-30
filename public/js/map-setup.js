function initMap() {


    const myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 16,
            center: directions.lasTablas.coords,
            styles: mapStyles.silver
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: directions.lasTablas.coords,
        title: ''
    })

}