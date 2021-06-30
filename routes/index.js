module.exports = app => {

  app.use('/maps', require('./maps.routes'))
  app.use('/places', require('./places.routes'))
  app.use('/', require('./base.routes'))
  app.use('/api', require('./api.routes'))
 
}


