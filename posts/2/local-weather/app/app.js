function AppComponent(weather) {
  var self = this

  function init() {
    self.version = ''
    http.get('https://api.github.com/repos/angular/angular/tags')
    .observer({
      next: function (res) {
        self.version = res.json()[0].name
      }
    })
  }

  self.handleZipForm = function(zipcode) {
    console.log(weather.get(zipcode))
  }

  // init()
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
