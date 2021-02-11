module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/lugares', require('./places.routes.js'))
}