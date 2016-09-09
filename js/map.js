$( function() {

	if (ymaps) {
		ymaps.ready(init);
	}

	function init () {
		var myMap = new ymaps.Map("map", {
				center: [55.755175569005,37.665227999999985],
				zoom: 17
			}),


		// Создаем метку с помощью вспомогательного класса.
			myPlacemark1 = new ymaps.Placemark([55.755175569005,37.665227999999985], {
				// Свойства.
				// Содержимое иконки, балуна и хинта.
				//iconContent: '1',
				balloonContent: '4th Syromyatnicheskiy Lane, 1, Bld. 6'
				//hintContent: 'Стандартный значок метки'
			}, {
				// Опции.
				// Стандартная фиолетовая иконка.
				preset: 'twirl#violetIcon'
			});

			/*myPlacemark2 = new ymaps.Placemark([55.76, 37.56], {
				// Свойства.
				hintContent: 'Собственный значок метки'
			}, {
				// Опции.
				// Своё изображение иконки метки.
				iconImageHref: '/maps/doc/jsapi/2.x/examples/images/myIcon.gif',
				// Размеры метки.
				iconImageSize: [30, 42],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-3, -42]
			});*/

		myMap.controls.add('smallZoomControl');
		// Добавляем все метки на карту.
		myMap.geoObjects
			.add(myPlacemark1)
			//.add(myPlacemark2)
			;
	}


});