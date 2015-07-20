function WeatherService(http) {
  var self = this

  self.get = function(zipcode) {
    var url = 'https://api.forecast.io/forecast/'
    url += app.FORECAST_IO_KEY

    http.request({
      url: url
    })
    console.log('zip: ',  zipcode)
  }

  return self
}

WeatherService.parameters = [[ng.Http]]
WeatherService.annotations = [
  new ng.ComponentAnnotation({
    injectables: [ng.Http]
  }),
]
