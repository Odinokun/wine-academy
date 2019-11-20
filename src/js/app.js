$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin Slick slider
  require('./modules/slick')();

  // begin dropdowns
  require('./modules/dropdown')();

  // begin mobile menu
  // require('./modules/menu')();

  // begin Popup
  require('./modules/popup')();

  // begin Popover
  require('./modules/popover')();

  // begin Popup-tabs
  require('./modules/popup-tabs')();

  // begin phone mask
  require('./modules/maskedinput')();

  // begin UI
  require('./modules/jquery-UI')();

  // begin hover text fadeIn
  require('./modules/text-fadeIn')();

  // begin hide/open popup`s inputs
  require('./modules/hide-open-inputs')();

  // begin accordeon
  require('./modules/accordeon')();

  // begin tabs
  require('./modules/tabs')();

  // begin catalog-filter-title
  require('./modules/catalog-filter-title')();

  // begin filter-reset
  require('./modules/reset')();

  // begin basket counter
  require('./modules/counter')();

  // begin filter-open-close
  require('./modules/filter-open-close')();

});