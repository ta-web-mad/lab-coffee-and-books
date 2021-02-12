let map

function initMap() {

    map = new google.maps.Map(
        document.querySelector('#restaurants-map'),
        { zoom: 10, center: { lat: 40.392499, lng: -3.698214 } }
    )
  
}

