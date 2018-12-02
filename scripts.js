if($(window).width() > 925) {
  // Bring clicked card to front
  let highestDraggableZIndex = 0;
  function bringCardToFront(clickedCard) {
    let thisElemZIndex = highestDraggableZIndex + 1;
    $(clickedCard).css('z-index', thisElemZIndex);
    highestDraggableZIndex = thisElemZIndex; 
  };

  // Make cards draggable
  const elem = document.querySelector('.draggable');
  const draggableElems = document.querySelectorAll('.draggable');
  const draggies = []
  for ( let i=0; i < draggableElems.length; i++ ) {
    const draggableElem = draggableElems[i];
    let draggie = new Draggabilly(draggableElem);
    draggies.push( draggie );
  }

  // Add mousetrails
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
        element.style.zIndex = 1000;
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
}