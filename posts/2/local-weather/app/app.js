function AppComponent(weather) {
  var self = this

  function init() {
    self.weather = {}
  }

  self.locate = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
       weather.get({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).observer({
        next: function(res) {
          self.weather = res.json().weather[0]
        }
      })

    })
  }

  init()
  return self
}

AppComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'app',
    viewInjector: [WeatherService]
  }),
  new ng.ViewAnnotation({
    templateUrl: 'app/app.html'
  })
]
AppComponent.parameters = [[WeatherService]]
