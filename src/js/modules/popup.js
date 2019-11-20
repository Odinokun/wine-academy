module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function(e) {
    e.preventDefault();

    let linkVal = $(this).data('popup');

    $('body').addClass('no-scroll');
    $(linkVal).addClass('active');
    $('.popup__layer').fadeIn();
  });
  // end popup open

  // begin popup close
  $('.popup__layer, .popup__close').on('click', function() {
    $('body').removeClass('no-scroll');
    $('.popup').removeClass('active');
    $('.popup__layer').fadeOut();
  });
  // end popup close

};