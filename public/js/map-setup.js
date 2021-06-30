
function initMap() {


    const myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 16,
            center: directions.Teleclub.coords,
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: directions.Teleclub.coords,

    })

}