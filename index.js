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