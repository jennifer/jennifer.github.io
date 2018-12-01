var elem = document.querySelector('.draggable');
var draggie = new Draggabilly( elem, {
  // options...
});

// or pass in selector string as first argument
var draggie = new Draggabilly( '.draggable', {
  // options...
});

// if you have multiple .draggable elements
// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( var i=0; i < draggableElems.length; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    // options...
  });
  draggies.push( draggie );
}


window.addEventListener('mousemove', function(e) {
    [1, .9, .8, .5, .1].forEach(function(i) {
      const j = (1 - i) * 50;
      const element = document.createElement('div');
      const size = Math.ceil(Math.random() * 11 * i) + 'px';
      element.style.position = 'absolute';
      element.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
      element.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
      element.style.width = size;
      element.style.height = size;
      element.style.background = 'hsla(' +
        Math.round(Math.random() * 360) + ', ' +
        '100%, ' +
        '50%, ' +
        i + ')';
      element.style.borderRadius = size;
      element.style.pointerEvents = 'none';
      document.body.appendChild(element);
      window.setTimeout(function() {
        document.body.removeChild(element);
      }, Math.round(Math.random() * i * 600));
    });
  }, false);