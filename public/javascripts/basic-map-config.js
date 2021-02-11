function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#map'), { zoom: 15, center: { lat: 40.392499, lng: -3.698214 }, styles: mapStyles.retro }
    )

    new google.maps.Marker({
        position: directions.BlackPoplar.coords,
        title: directions.BlackPoplar.title,
        map: myMap
    })
    new google.maps.Marker({
        position: directions.Contrabandos.coords,
        title: directions.Contrabandos.title,
        map: myMap
    })
    new google.maps.Marker({
        position: directions.Ruda.coords,
        title: directions.Ruda.title,
        map: myMap
    })
}

//  Teo, se me ha pasado casi dos horas intentando los markers... y nada





//  const locationMarkers = [
//     ['Black Polar', 40.3958754, - 3.6982497],
//     ['Contrabandos', 40.4077081, -3.7035937],
//     ['Ruda Café', 40.4104441, -3.7101697]
//  ]

//   for (i = 0; i < locationMarkers.length; i++) {
//     var position = new google.maps.LatLng(locationMarkers.lat, locationMarkers.long);
//     bounds.extend(position);
//     marker = new google.maps.Marker({
//       position: position,
//       map: map,
//       title: markers[i].title
//     });
//     gmarkers.push(marker);
//   }