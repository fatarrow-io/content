function PostComponent(routeParams) {
  console.log(routeParams.params)
}


PostComponent.parameters = [[angular.router.RouteParams]]

PostComponent.annotations = [
  new angular.ComponentAnnotation({
    injectables: [angular.router.RouteParams]
  })
]
