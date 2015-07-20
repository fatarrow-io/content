function WeatherService(http) {
  var self = this

  self.get = function(options) {
    var url = [
      'https://api.forecast.io/forecast/',
      app.FORECAST_IO_KEY, '/',
      options.latitude, ',',
      options.longitude,
    ].join('')
    url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=13'
    return http.get(url, {
      params: {
        lat: options.latitude,
        lon: options.longitude
      }
    })
  }

  return self
}

WeatherService.parameters = [[ng.Http]]
WeatherService.annotations = [
  new ng.ComponentAnnotation({
    injectables: [ng.Http]
  }),
]
