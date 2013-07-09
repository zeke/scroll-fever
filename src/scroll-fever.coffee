class ScrollFever

  constructor: (@dom_id='scroll-fever') ->

    # Create DOM element
    @el = document.createElement('div')
    @el.setAttribute('id', @dom_id)
    @el.setAttribute('class', @dom_id)
    document.body.appendChild(@el)

    # Listen for Scrollage
    document.addEventListener('scroll', @paint)

    # First-time render
    @paint()

  # Account for document height discrepancies between browsers
  # http://stackoverflow.com/a/1147768/95670
  getBodyHeight: ->
    body = document.body
    html = document.documentElement
    Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)

  # Set width based on scroll position
  # Width when scrolled to top: 0%
  # Width when scrolled to bottom: 100%
  paint: =>
    @scale = (window.scrollY/(@getBodyHeight()-window.innerHeight)*100)+"%"
    @el.style.width = @scale

module.exports = ScrollFever