function noseComoCojonesQuitarElCallback() {}

let timeout
const loc = document.querySelectorAll('.loc')

loc.forEach(input =>
    input.addEventListener('keyup', e => {
        const currentLocation = loc[0].value + ' ' + loc[1].value

        clearTimeout(timeout)

        if (input.value !== '' || input.id === 'name') {
            input.id !== 'name' ? (timeout = setTimeout(() => geoCode(currentLocation), 400)) : (timeout = setTimeout(() => release(), 100))
        }
    })
)

document.querySelector('.loc').addEventListener('keydown', () => {
    clearTimeout(timeout)
})

//

//

const geoCode = (location, map) => {
    let geocoder = new google.maps.Geocoder()

    geocoder.geocode({ address: location }, (res, status) => {
        let latLng = res[0].geometry.location
        let cords = { lat: latLng.lat(), lng: latLng.lng() }

        if (status === 'OK') printLocs(cords)
    })
}

const printLocs = cords => {
    const { lat, lng } = cords
    const inputsCords = document.querySelectorAll('.cords')
    inputsCords[0].value = lat
    inputsCords[1].value = lng
}

const release = () => {
    if (loc[0].value !== '') loc[1].disabled = false
    if (loc[1].disabled === false && loc[0].value === '') loc[1].disabled = true
}
