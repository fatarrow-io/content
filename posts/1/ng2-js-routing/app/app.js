function AppComponent(router) {
  router.config({
    path: '/',
    component: HomeComponent,
    as: 'home'
  })

  router.config({
    path: '/#/about',
    component: AboutComponent,
    as: 'about'
  })
}

AppComponent.parameters = [[angular.router.Router]]

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'app',
    injectables: [angular.router.Router]
  }),
  new angular.ViewAnnotation({
    templateUrl: 'app/app.html',
    directives: [
      angular.router.RouterLink,
      angular.router.RouterOutlet
    ]
  })
];
