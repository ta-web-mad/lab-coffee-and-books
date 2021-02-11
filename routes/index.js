module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./coffee.routes.js'))
    app.use('/api', require('./api.routes.js'))
    // app.use('/', require('./books.routes'))
}