# Scroll Position Listeners
#coding/javascript

(first done on ChristianColleges.com)

[Vanilla JS Throttle Implementation](https://codepen.io/germanny/pen/aLGovG)

```
/**
* Scroll position listeners
*/
var filters   = 'algolia-database';
var button    = document.getElementById('js-filters-toggle');

if (document.getElementById(filters)) {
  window.addEventListener('scroll', throttle(function() {
    activateElement(filters, 20); // 20 to account for padding so we can see the filters even if there is only 1 school
  }, 500));
  button.addEventListener('click', function() {
    toggleElement(this, 'toggled', 'Filters', 'Close');
  });
}

/**
 * Scroll events throttle
 * @param  {function} fn     function to throttle
 * @param  {int}      wait   pause length between firing the event
 */
function throttle(fn, wait) {
  var time  = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}

/**
 * Get an element's relative top position
 * @param  {string} elem     id of element to locate
 */
function getElementOffset(elem) {
  var e       = document.getElementById(elem);
  var offset  = { y:0 };

  while (e) {
    offset.y -= e.offsetTop;
    e         = e.offsetParent;
  }

  if (window.pageYOffset) {
      offset.y += window.pageYOffset;
  }

  return { y: offset.y };
}

/**
 * Activate an element based on its top position
 * @param  {string} elem     id of element to activate
 * @param  {int}    offset   offset to add if we want to adjust the activation point
 */
function activateElement(elem, offset) {
  offset          = (typeof offset !== 'undefined') ? offset : 0;
  var elemOffset  = getElementOffset(elem);
  var el          = document.getElementById(elem);

  if (elemOffset.y > 0 - offset) {
    el.classList.add('active');
  } else {
    el.classList.remove('active');
  }
}

/**
 * Toggle an element's text label and class
 * @param  {string} elem          element type (usually a button or something like that)
 * @param  {string} elemClass     class to toggle
 * @param  {string} startLabel    default label text
 * @param  {string} endLabel      label text when element is toggled
 */
function toggleElement(elem, elemClass, startLabel, endLabel) {
  elem         = (typeof elem !== 'undefined') ? elem : this;
  elemClass    = (typeof elemClass !== 'undefined') ? elemClass : 'toggled';
  startLabel   = (typeof startLabel !== 'undefined') ? startLabel : 'Show More';
  endLabel     = (typeof endLabel !== 'undefined') ? endLabel : 'Show Less';

  elem.classList.toggle(elemClass);
  elem.innerHTML = (elem.innerHTML == startLabel) ? endLabel : startLabel;
}
```