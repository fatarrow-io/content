function AppComponent() {}

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'app'
  }),
  new angular.ViewAnnotation({
    templateUrl: 'app/app.html'
  })
];
