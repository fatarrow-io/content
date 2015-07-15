function AppComponent(http) {
  var self = this

  self.githubLinks = {}
  http.get('https://api.github.com/')
    .observer({ next: function (res) {
      self.githubLinks = res.json()

      console.log(self.githubLinks)
    } })

}

AppComponent.parameters= [[ng.Http]]
AppComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'app',
    injectables: [ng.Http]
  }),
  new ng.ViewAnnotation({
    template: '<h1>HTTP</h1> {{ githubLinks.current_user_url }}',
  })
]
