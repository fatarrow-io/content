function HomeComponent () {
  console.log('HomeComponent instantiated')
}

HomeComponent.annotations = [
  new angular.ComponentAnnotation({
  //   selector: 'app',
  //   injectables: [angular.router.Router]
  }),
  // new angular.ViewAnnotation({
  //   templateUrl: 'app/home/home.html'
  // })
]
