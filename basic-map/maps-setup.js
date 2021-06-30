function initMap() {


    const myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 16,
            center: directions.ironhackBCN.coords,
            styles: mapStyles.silver
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: directions.ironhackBCN.coords,
        title: 'Aquí estamos viendo mapas yay'
    })

}