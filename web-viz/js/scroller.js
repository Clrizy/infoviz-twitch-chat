/**
 * scroller - handles the details
 * of figuring out which section
 * the user is currently scrolled
 * to.
 *
 */
function scroller() {
  var container = d3.select('#d3graphic');
  // event dispatcher
  var dispatch = d3.dispatch('active', 'progress');

  // d3 selection of all the
  // text sections that will
  // be scrolled through
  var sections = d3.selectAll('.step');

  // array that will hold the
  // y coordinate of each section
  // that is scrolled through
  var sectionPositions = [];
  var currentIndex = -1;
  // y coordinate of the container itself
  var containerStart = 0;

  /**
   * scroll - constructor function.
   * Sets up scroller to monitor
   * scrolling of els selection.
   *
   * @param els - d3 selection of
   *  elements that will be scrolled
   *  through by user.
   */
  function scroll() {
    d3.select(window)
      .on('scroll.scroller', position)
      .on('resize.scroller', resize)
      resize();
    let timer = d3.timer(function() {
      position();
      timer.stop();
    });
  }

  /**
   * resize - called initially and
   * also when page is resized.
   * Resets the sectionPositions
   *
   */
 

  function resize(){
    sectionPositions = [];
    let startPos;
    sections.each(function(d, i) {
      let top = this.getBoundingClientRect().top;
      if (i === 0 ){
        startPos = top;
      }
      sectionPositions.push(top - startPos)
    });
  }

  /**
   * position - get current users position.
   * if user has scrolled to new section,
   * dispatch active event with new section
   * index.
   *
   */
   function position() {
    let pos = window.pageYOffset - 20 - containerStart;
    let sectionIndex = d3.bisect(sectionPositions, pos);
    sectionIndex = Math.min(sections.size()-1, sectionIndex);
    if (currentIndex !== sectionIndex){
      console.log('CALLING THIS')
      dispatch.call('active', this, sectionIndex);
      currentIndex = sectionIndex;
    }
    let prevIndex = Math.max(sectionIndex - 1, 0);
    let prevTop = sectionPositions[prevIndex]
    let progress = (pos - prevTop) / (sectionPositions[sectionIndex]   - prevTop);
    dispatch.call('progress', this, currentIndex, progress)
  }

  /**
   * container - get/set the parent element
   * of the sections. Useful for if the
   * scrolling doesn't start at the very top
   * of the page.
   *
   * @param value - the new container value
   */
   scroll.container = function(value) {
    if (arguments.length === 0){
      return container
    } else {
      container = value
      containerStart = value.getBoundingClientRect().top;
      return scroll;
    }    
  }
  scroll.on = function(action, callback){
    dispatch.on(action, callback)
  };
  return scroll;
}
