function AppComponent(http) {
  console.log(http.get('https://api.github.com/'))
}

AppComponent.parameters= [[ng.Http]]
AppComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'app',
    injectables: [ng.Http]
  }),
  new ng.ViewAnnotation({
    template: '<h1>HTTP</h1>',
  })
]
