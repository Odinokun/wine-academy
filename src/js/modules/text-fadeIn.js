module.exports = function() {

  // begin text hover fadeIn
  $(".index-banners__item--sm").on({
    mouseenter: function () {
      $(this).children('.index-banners__text').children('span').slideDown();
    },
    mouseleave: function () {
      $(this).children('.index-banners__text').children('span').slideUp();
    }
  });
  // end text hover fadeIn

};