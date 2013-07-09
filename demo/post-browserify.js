;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var ScrollFever = require('../index')

document.addEventListener('DOMContentLoaded', function(){
  window.scrollFever = new ScrollFever()
})

},{"../index":2}],2:[function(require,module,exports){
var ScrollFever,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ScrollFever = (function() {

  function ScrollFever(dom_id) {
    this.dom_id = dom_id != null ? dom_id : 'scroll-fever';
    this.paint = __bind(this.paint, this);

    this.el = document.createElement('div');
    this.el.setAttribute('id', this.dom_id);
    this.el.setAttribute('class', this.dom_id);
    document.body.appendChild(this.el);
    document.addEventListener('scroll', this.paint);
    this.paint();
  }

  ScrollFever.prototype.getBodyHeight = function() {
    var body, html;
    body = document.body;
    html = document.documentElement;
    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  };

  ScrollFever.prototype.paint = function() {
    this.scale = (window.scrollY / (this.getBodyHeight() - window.innerHeight) * 100) + "%";
    return this.el.style.width = this.scale;
  };

  return ScrollFever;

})();

module.exports = ScrollFever;
},{}]},{},[1])
;