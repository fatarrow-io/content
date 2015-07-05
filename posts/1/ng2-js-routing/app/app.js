function AppComponent(router, locationStrategy) {
  router.config([{
    path: '/',
    component: HomeComponent,
    as: 'home'
  }, {
    path: '/about',
    component: AboutComponent,
    as: 'about'
  }, {
    path: '/posts/:id',
    component: PostComponent,
    as: 'post'
  }])

  console.log(locationStrategy)
}

AppComponent.parameters = [
  [angular.router.Router],
  [angular.router.LocationStrategy]
]

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'app',
    injectables: [angular.router.Router, angular.router.LocationStrategy]
  }),
  new angular.ViewAnnotation({
    templateUrl: '/app/app.html',
    directives: [
      angular.router.RouterLink,
      angular.router.RouterOutlet
    ]
  })
];
