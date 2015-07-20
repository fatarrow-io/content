window.app = {}

document.addEventListener('DOMContentLoaded', function () {
  ng.bootstrap(AppComponent, [
    ng.httpInjectables
  ])
})
