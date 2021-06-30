module.exports = app => {
    app.use('/', require('./base.routes'))
    // app.use('/mapas', require('./map.routes'))
    app.use('/lugar', require('./place.routes'))
    app.use('/api', require('./api.routes'))
}