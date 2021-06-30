module.exports = app => {
    //    baseUrl     -     endpoints
    app.use('/', require('./base.routes')) 
    app.use('/places', require('./places.routes'))
    app.use('/api', require('./api.routes'))
}