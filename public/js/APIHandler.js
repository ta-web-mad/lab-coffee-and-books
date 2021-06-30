class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = '';
        this.api = axios.create({
            baseURL: baseUrl
        })
    }
    getFullList() {
        return this.api.get('/lista')

    }
    getOneRegister(id) {
        return this.api.get(`/lista/${id}`)
    }
    createOneRegister(characterInfo) {
        return this.api.post('/lista', characterInfo)
    }
    updateOneRegister(id, characterInfo) {
        return this.api.put(`/lista/${id}`, characterInfo)
    }
    deleteOneRegister(id) {
        return this.api.delete(`/lista/${id}`)
    }
}