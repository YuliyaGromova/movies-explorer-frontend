export default (function() {

    window.addEventListener("resize", resizeThrottler, false);
  
    let resizeTimeout;
    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();
  
         // The actualResizeHandler will execute at a rate of 15fps
         }, 66);
      }
    }
  
    function actualResizeHandler() {
      // handle the resize event
      ...
    }
  
  }());