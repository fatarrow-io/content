document.addEventListener('DOMContentLoaded', function() {
  window.app = angular.bootstrap(AppComponent, [
    angular.router.routerInjectables,
    angular.bind(angular.router.LocationStrategy).toClass(angular.router.HashLocationStrategy)
  ]);
});
