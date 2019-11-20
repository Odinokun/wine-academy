module.exports = function() {

  // begin popover open
  $('.popup-wine__descr-popover-link').on('click', function(e) {
    e.preventDefault();

    $(this).siblings('.popup-wine__descr-popover').addClass('active');
  });
  // end popover open

  // begin popover close
  $(document).mouseup(function(e){
    let popover = $(".popup-wine__descr-popover");

    if (!popover.is(e.target) && popover.has(e.target).length === 0) {
      popover.removeClass('active');
    }
  });

  $('.popup-wine__descr-popover-close').on('click', function() {
    $('.popup-wine__descr-popover').removeClass('active');
  });
  // end popover close

};