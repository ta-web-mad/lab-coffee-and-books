module.exports = app => {
  app.use('/', require('./base.routes'))
  app.use('/maps', require('./map.routes'))
  app.use('/places', require('./places.routes'))
  app.use('/api', require('./api.routes'))
}