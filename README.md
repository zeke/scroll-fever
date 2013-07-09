# Scroll Fever

A progress bar that fills up as you scroll down the page in your browser.
Demo at [zeke.github.io/scroll-fever](http://zeke.github.io/scroll-fever/).

## Installation

```
npm install scroll-fever --save
```

## Usage

In your application's javascript file:

```js
// pre-browserify.js
var ScrollFever = require('scroll-fever')
new ScrollFever()
```

Add styles:

```css
#scroll-fever {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 6px;
  background: red;
}
```

Use [browserify](http://browserify.org/) to bundle it up for the browser:

```sh
browserify pre-browserify.js -o post-browserify.js
```

## Demo

Visit [zeke.github.io/scroll-fever](http://zeke.github.io/scroll-fever/), or clone
the repo and look in the `demo` directory.

