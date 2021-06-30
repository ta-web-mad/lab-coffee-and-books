function initMap() {
    const app = new ApiHandler('http://localhost:3000')

    // The location of Uluru
    const valencia = { lat: 39.473519551304406, lng: -0.37627598648998645 }

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: valencia,
    })

    //

    //
    // depende de la URL pido una o todas
    const url = window.location.href.split('/')

    if (url.length === 5) {
        setMarkerSingle(url, app, map)
    } else {
        setMarkers(app, map)
    }
}

function setMarkerSingle(url, app, map) {
    const id = url[4]
    // console.log(window.location.href.split('/'))

    app.getOneRegister(id)
        .then(res => {
            const [lat, lng] = res.data.location.coordinates
            console.log(res.data.name)

            const marker = new google.maps.Marker({
                position: { lat, lng },
                map: map,
                title: res.data.name,
            })

            map.setZoom(20)
            map.setCenter({ lat, lng })
        })
        .catch(err => console.log(err))
}

function setMarkers(app, map) {
    app.getFullList()
        .then(res => {
            res.data.forEach(place => {
                const [lat, lng] = place.location.coordinates
                const marker = new google.maps.Marker({
                    position: { lat, lng },
                    map: map,
                    title: place.name,
                })
            })

            map.setCenter({ lat: 39.47101896438086, lng: -0.3762156699783621 })
            map.setZoom(14)
        })
        .catch(err => console.log(err))
}
