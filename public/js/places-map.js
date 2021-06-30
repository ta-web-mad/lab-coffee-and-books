function initMap() {

    const placesMap = new google.maps.Map(
        document.querySelector('#places-list-map'),
        {
            zoom: 12,
            center: { lat: 40.392499, lng: -3.698214 },
            styles: mapStyles.electric
        }
    );

    getPlacesData(placesMap);
}

function getPlacesData(placesMap) {

    axios
        .get('/api/places')
        .then(res => res.data.forEach(el => printMarker(el.location, placesMap, el.name)))
        .catch(err => console.log(err));

}

function printMarker(location, placesMap, name) {

    const { coordinates } = location;

    new google.maps.Marker({
        map: placesMap,
        position: { lat: coordinates[0], lng: coordinates[1] },
        title: name
    });

}