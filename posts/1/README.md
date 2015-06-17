# Angular 2 Routing with JavaScript

As I sit here and write this, Angular 2 is in alpha 26 which means it is early days for the framework. The existing examples are sparse and typically written in TypeScript. As far as I can tell, there are actually no examples that employ both the router and JavaScript. 

Note: The Angular 2 docs refer to code that runs in the browser as "ES5." That's crap. The code that runs in a Web browser is called JavaScript.

## Optional: Serving Static Files

Let's get started with an empty directory so you can see that we have nothing up our sleeves. No build steps, no web server, just an empty directory and a few static files. 

* make the folder ng2-js-routing
* within that folder create
  * index.html
  * index.js

```
ng2-js-routing
├── index.html
└── index.js
 ```

For this next step, we're going to throw some basic markup in there just to make sure we're looking at the right file.

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    This file is located in <em>ng2-js-routing/index.html</em>
  </body>
</html>
```

Open index.html in a browser and you should see something like this.

<image src="1.png" />

Groovy. Now for something simple from that JavaScript file

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="index.js"></script>  <!-- highlight -->
  </head>
  <body>
    This file is located in <strong>ng2-js-routing/index.html</strong>
  </body>
</html>
```
`index.js`
```javascript
console.log('ng2-js-routing/index.js loaded')
```
Back in the browser, open up the JavaScript console and refresh the page. You should see something like:

<image src="2.png" />

Great, now we know that we're looking at the right files in the browser. I've wasted so many hours being frustrated by an unchanging webpage only to realize later that I'm editing my development files but refreshing the production website. 


_Q: should we add a explanation of_ `document.addEventListener('DOMContentLoaded'` ?

## Optional: File Load Order


Let's add the Angular 2 source and bootstrapping boilerplate. First, the source.Let's change `index.html`'s console.log message to show us the `angular` global object.

`index.js` **error condition**

```javascript
console.log('ng2-js-routing/index.js loaded')
console.log(angular)
```
Let's correct that now.

<image src="3.png" />

As expected, we see an error because we've not included angular in our web app. If it's an object we have it'll look more like this:

<image src="4.png" />

I want to verify that angular isn't included in the web app at all rather than it just not being in the app at the time that `index.js` is run, so I'm going to ask our console to display the angular object one more time.

<image src="5.png" />

Yup, that's the error I was hoping for. It's important to not only see the errors we expect but see the errors for the reason we expect them. Case in point, let's add angular to our app, but we'll mess it up and include it after `index.js`.

`index.html` **error condition**

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    This file is located in <strong>ng2-js-routing/index.html</strong>
    <!-- FIXME: angular needs to be loaded before we may reference it. -->
    <script src="index.js"></script>
    <script src="https://code.angularjs.org/2.0.0-alpha.26/angular2.sfx.dev.js"></script>
  </body>
</html>
```

Resulting in

<image src="3.png" />

Same error, different reason. Let's ask the JavaScript console for the angular object again.

<image src="6.png" />

If you are getting a refrence error in one of your JavaScript files for a global object like `angular`, but you don't see the same error in the JavaScript console, then you have a load order issue. I mention this because Angular 1 helps the developer out by providing the `angular.module` method. In contrast, **Angular 2 provides no help with file load order** which might come as a shock to developers that are planning on using the new framework with vanillia JavaScript and minimal tooling.

Let's fix the error by swapping the order of our script tags.

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    This file is located in <strong>ng2-js-routing/index.html</strong>

    <script src="https://code.angularjs.org/2.0.0-alpha.26/angular2.sfx.dev.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

Which clears the error condition.

<image src="7.png" />

_Zach: Looking at this now, I think the optional file load order section should happen when people are likely to see it, when actually loading Angular 2 components. The secion in its current state is nice in that it's clear, file load order isn't being taught at the same time as anything else. It has the downside of not being realistic, though. People are unlikely to see the load order issue this early therefore this example doesn't ring true._

Onto bootstrapping the app.

## Bootstrapping the app

```
ng2-js-routing
├── app
│   ├── app.css
│   ├── app.html
│   └── app.js
├── index.html
└── index.js
```

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <app>
    </app>
    
    <script src="https://code.angularjs.org/2.0.0-alpha.26/angular2.sfx.dev.js"></script>
    <script src="app/app.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

`app.html`

```html
This file is located at <strong>app/app.html</strong>
```

`app.js`

```javascript
function AppComponent() {}

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'app'
  }),
  new angular.ViewAnnotation({
    templateUrl: 'app/app.html'
  })
];
```

`index.js`

```javascript
document.addEventListener('DOMContentLoaded', function() {
  console.log(AppComponent)
});
```

<image src="8.png" />

```javascript
document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(AppComponent);
});
```

<image src="9.png" />

[server](http://stackoverflow.com/a/12905427)

<image src="10.png" />

`app.css`

```css
app .container {
  display: -webkit-flex;
  display: flex;
}
app nav {
  width: 200px;
}
app .main {
  -webkit-flex: 1;
  flex: 1;
}
```

`app.html`

```html
<div class="container">
  <nav>
    <ul>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
    </ul>
  </nav>

  <div class="main">
  </div>
</div>
```

<image src="11.png" />

## Inject the Router

`index.js`

```js
document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(AppComponent, [
    angular.router.routerInjectables
  ]);
});
```

`app.js`

```js
function AppComponent(router) {
  console.log(router)
}

AppComponent.parameters = [[angular.router.Router]]

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'app',
    injectables: [angular.router.Router]
  }),
  new angular.ViewAnnotation({
    templateUrl: 'app/app.html'
  })
];
```

<image src="12.png" />

## Configure The Router

```
ng2-js-routing
├── app
│   ├── app.css
│   ├── app.html
│   ├── app.js
│   └── home
│       ├── home.html
│       └── home.js
├── index.html
└── index.js
```

`app.js`

```javascript
function AppComponent(router) {
  router.config({
    path: '/',
    component: Home,
    as: 'home'
  })
}
```

`home.js`

```javascript
function HomeComponent () {
  console.log('HomeComponent instantiated')
}

HomeComponent.annotations = [
  new angular.ComponentAnnotation({
  })
]
```

<image src="13.png" />


