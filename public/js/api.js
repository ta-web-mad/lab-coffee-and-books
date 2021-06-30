const api = new ApiHandler('http://localhost:3000')

api.getFullList()
    .then(res => {
        // console.log(res)
        print(res.data)
    })

    .then(() => {
        document.querySelectorAll('.link-place').forEach(link =>
            link.addEventListener('click', e => {
                e.preventDefault()

                const id = e.currentTarget.dataset.id

                api.getOneRegister(id)
                    .then(place => {
                        const editInputs = document.querySelectorAll('#edit-form input')

                        const [lat, lng] = place.data.location.coordinates
                        const { name } = place.data

                        editInputs[0].value = name
                        editInputs[1].value = lat
                        editInputs[2].value = lng
                        editInputs[3].value = id
                    })
                    .catch(err => console.log(err))
            })
        )
    })
    .catch(err => console.log(err))

//

//

const print = data => {
    const divPlaces = document.querySelector('#places-list')
    let template = ''
    data.forEach(place => {
        template += `<p class="text-center"> <a href="#" data-id="${place._id}" class="link-place">${place.name}</a> </p>`
    })

    divPlaces.insertAdjacentHTML('beforeend', template)
}
