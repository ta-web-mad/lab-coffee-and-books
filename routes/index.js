module.exports = (app) => {
  // Base URLS
  app.use("/", require("./base.routes.js"))
  app.use("/coffee-shops", require("./coffee-shops.routes"))
}
