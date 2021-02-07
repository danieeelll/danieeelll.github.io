
/* **** this plugin is builded on the public solution from this location: http://jsfiddle.net/y4swj2ts/3/  **** */
/* **** https://stackoverflow.com/questions/14905779/jquery-vertical-mousewheel-smooth-scrolling **** */ 

/* *** function for prevent to get error in chorome:'Unable to preventDefault inside passive event listener' *** */
/* Preventing 'Unable to preventDefault inside passive event listener' error within Chrome & OpenLayers 2 */
/* https://stackoverflow.com/questions/55955171/preventing-unable-to-preventdefault-inside-passive-event-listener-error-within */

//function mouseTouch(){
//  if(mouseTouchSwitch.checked){

  const eventListenerOptionsSupported = () => {
    let supported = false;

    try {
      const opts = Object.defineProperty({}, 'passive', {
        get() {
          supported = true;
        }
      });

      window.addEventListener('test', null, opts);
      window.removeEventListener('test', null, opts);
    } catch (e) {}

    return supported;
  };

  const defaultOptions = {
    passive: false,
    capture: false
  };
  /* original code is preventing all problematic events */
  /*const supportedPassiveTypes = [
    'scroll', 'wheel',
    'touchstart', 'touchmove', 'touchenter', 'touchend', 'touchleave',
    'mouseout', 'mouseleave', 'mouseup', 'mousedown', 'mousemove', 'mouseenter', 'mousewheel', 'mouseover'
  ];*/
  /* but this should be enought for my issue */
  const supportedPassiveTypes = ['scroll', 'wheel', 'mousewheel', 'touchmove', 'touchleave'];

  const getDefaultPassiveOption = (passive, eventName) => {
    if (passive !== undefined) return passive;
    return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
  };

  const getWritableOptions = (options) => {
    const passiveDescriptor = Object.getOwnPropertyDescriptor(options, 'passive');

    return passiveDescriptor && passiveDescriptor.writable !== true && passiveDescriptor.set === undefined
      ? Object.assign({}, options)
      : options;
  };

  const overwriteAddEvent = (superMethod) => {
    EventTarget.prototype.addEventListener = function (type, listener, options) {
      const usesListenerOptions = typeof options === 'object' && options !== null;
      const useCapture          = usesListenerOptions ? options.capture : options;

      options         = usesListenerOptions ? getWritableOptions(options) : {};
      options.passive = getDefaultPassiveOption(options.passive, type);
      options.capture = useCapture === undefined ? defaultOptions.capture : useCapture;

      superMethod.call(this, type, listener, options);
    };

    EventTarget.prototype.addEventListener._original = superMethod;
  };

  const supportsPassive = eventListenerOptionsSupported();

  if (supportsPassive) {
    const addEvent = EventTarget.prototype.addEventListener;
    overwriteAddEvent(addEvent);
  }
  /* end of failure prevention */

  /* code for mousewheel auto scroll between anchors: '#welcome-section','#projects','#contacts' */ 
  /* with code explanation here: https://stackoverflow.com/questions/25839487/auto-scroll-to-next-anchor-at-mouse-wheel */
  /* demo page : http://jsfiddle.net/t6LLybx8/728/ */

  (function hh() {
      var delay = false;

      /* here is my addition which is updating the page links by anchors */
      let wheelLocationArray = new Array('#welcome-section','#projects','#contacts');
      function runProjectsAnims2(){
          document.getElementById('projects').focus();
          let forAnim1 = Array.from(document.querySelectorAll('.project'));
          let forAnim2 = Array.from(document.querySelectorAll('#projects h2'));

          document.getElementById('projects').style.backgroundColor = 'hsla(200, 100%, 75%, 0.20)'; 
          document.getElementById('projects').style.transition = 'background-color 2s linear 4s';
          forAnim1.forEach(anim1 => { 
              anim1.style.animation = 'start-neon-projects 2.5s forwards 1.5s';
          });
          forAnim2.forEach(anim2 => { 
              anim2.style.animation = 'neon-projects-h2 2s both';  
          });
      }
      /* my  addition end */

      /* this solution has also ability to hide "preventDefault active" problem in chrome. 
        But unfortunately it is also making troubles on Mozilla. */
      /* jQuery.event.special.mousewheel = {
        setup: function( _, ns, handle ) {
            this.addEventListener('mousewheel', handle, { passive: !ns.includes('noPreventDefault') });
        }
      };*/
      /*jQuery.event.special.mousewheel = {
        setup: function( _, ns, handle ) {
            this.addEventListener('mousewheel', handle, { passive: false });
        }
      };*/

      $(document).on('mousewheel DOMMouseScroll', function(event) {
        event.preventDefault();
        if(delay) return;
    
        delay = true;
        setTimeout(function(){delay = false},200)
    
        var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    
        // var a = document.getElementsByClassName('mousewheel');
        // if there are this 3 anchors elements written into this array, then the performance and delay is much better
        var a = new Array(document.getElementById('welcome-section'),document.getElementById('projects'),document.getElementById('contacts')); 
        //var i = new Array('20px','200px','2000px');
        if(wd < 0) {
          for(var i = 0 ; i < a.length ; i++) {
            var t = a[i].getClientRects()[0].top;
            if(t >= 40) break;
          }
        }
        else {
          for(var i = a.length-1 ; i >= 0 ; i--) {
            var t = a[i].getClientRects()[0].top;
            if(t < -20) break;
          }
        }
        
        if(i >= 0 && i < a.length) {
          //  $('html,body').animate({ scrollTop: a[i].offsetTop }, 'slow', // speed in milliseconds // but it works in FF only...
          //      'swing');

          $('html,body').animate({ scrollTop: a[i].offsetTop });
        
          /* my addition - update page location and start the script "runProjectsAnims2();" */
          location.href = wheelLocationArray[i];
          // if(location.hash == wheelLocationArray[1]){ runProjectsAnims2(); }
          /* my addition end */
        }
      });
    })();
    //console.clear();
 // }
  //else{
    //alert('mouse touch is off');
    //throw new Error("Manual Abort Script"); 
  //}
//}

//let mouseTouchSwitch = document.getElementById('setting5');
//mouseTouchSwitch.addEventListener('change', mouseTouch);

