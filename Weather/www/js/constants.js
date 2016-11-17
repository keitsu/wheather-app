angular.module('weather',[])

.constant('OpenWeatherConfig', {
   searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
   units: '&units=metric',
   appid: '&appid=<6b76ca06ac88637b430047c1a960d5bc>',
   imgUrl: 'http://openweathermap.org/img/w/'
})
