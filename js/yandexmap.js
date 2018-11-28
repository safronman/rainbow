ymaps.ready(function () {
  var myMap = new ymaps.Map("ya-maps", {
      center: [53.932784, 27.494111],
      zoom: 17,
    }, {
      suppressMapOpenBlock: true
    }),
    myPlacemark = new ymaps.Placemark(([53.932081, 27.493703]), {
      balloonContent: `
      <img src="img/greeting.svg" width="60">`,
      hintContent: 'Вот здесь мы работаем'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icons/icon-marker.svg',
      // Размеры метки.
      iconImageSize: [60, 72],
      // Смещение левого верхнего угла иконки относительно
      // её 'ножки' (точки привязки).
      iconImageOffset: [0, -90]
    });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('routeEditor');

})
