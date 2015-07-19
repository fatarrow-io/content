function AppComponent(http) {
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

  init()
  return self
}

AppComponent.parameters = [[ng.Http]]
AppComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'app',
    injectables: [ng.Http]
  }),
  new ng.ViewAnnotation({
    template: [
      '<h1>The Latest Version of Angular 2</h1>',
      '<h2>Current: {{ version }}</h2>'
    ].join('')

  })
]
