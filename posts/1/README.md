# Angular 2 Routing with JavaScript

As I sit here and write this, Angular 2 is in alpha 26 which means it is early days for the framework. The existing examples are sparse and typically written in TypeScript. As far as I can tell, there are actually no examples that employ both the router and JavaScript. 

Note: The Angular 2 docs refer to code that runs in the browser as "ES5." That's crap. The code that runs in a Web browser is called JavaScript.

**start optional basic intro**

Let's get started with an empty directory so you can see that we have nothing up our sleeves. No build steps, no web server, just an empty directory and a few static files. 

* make the folder ng2-js-routing
* within that folder create
  * index.html
  * index.js

```bash
mkdir ng2-js-routing
touch index.html
touch index.js
```

```
â””â”€â”€ ng2-js-routing
    â”œâ”€â”€ index.html
    â””â”€â”€ index.js
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

*end optional basic intro*

_Q: should we add a explanation of_ `document.addEventListener('DOMContentLoaded'` ?

Let's add the Angular 2 source and bootstrapping boilerplate. 


