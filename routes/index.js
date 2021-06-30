
module.exports = app => {
  app.use('/', require('./base.routes.js')) //REQUIERO PAGINA DE INICIO
  app.use('/lugares', require('./places.routes')) //REQUIERO LISTADO DE LUGARES
  app.use('/api', require('./api.routes.js'))
  app.use('/mapas', require('./map.routes.js'))

}
