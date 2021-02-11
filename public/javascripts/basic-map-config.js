function initBMap() {

  const mybasicMap = new google.maps.Map(
    document.querySelector('#map'),
    { zoom: 9, center: directions.coffeeShop.coords, styles: mapStyles.retro }
  )

  new google.maps.Marker({
    position: directions.casaPopino.coords,
    title: directions.casaPopino.title,
    map: mybasicMap
  })

  new google.maps.Marker({
    position: directions.casaPepe.coords,
    title: directions.casaPepe.title,
    map: mybasicMap
  })

  new google.maps.Marker({
    position: directions.coffeeShop.coords,
    title: directions.coffeeShop.title,
    map: mybasicMap
  })

  new google.maps.Marker({
    position: directions.bookStore.coords,
    title: directions.bookStore.title,
    map: mybasicMap
  })

  new google.maps.Marker({
    position: directions.ironhackGuethary.coords,
    title: directions.ironhackGuethary.title,
    map: mybasicMap
  })


}
