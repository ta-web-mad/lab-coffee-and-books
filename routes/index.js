module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/cafeterias', require('./coffee.routes'))
    app.use('/api', require('./api.routes.js'))
}
