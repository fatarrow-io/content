function AppComponent(router) {
  router.config([{
    path: '/',
    component: HomeComponent,
    as: 'home'
  },{
    path: '/about',
    component: AboutComponent,
    as: 'about'
  },{
    path: '/posts/:id',
    component: PostComponent,
    as: 'post'
  }])
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
