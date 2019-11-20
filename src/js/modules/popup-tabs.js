module.exports = function() {

  // begin popup tabs
  $('.popup-title').on('click', function(e) {
    e.preventDefault();

    let linkVal = $(this).data('tab');

    $('.popup-title, .popup-registration, .popup-login').removeClass('active');
    $(this).addClass('active');
    $(linkVal).addClass('active');
  });
  // end popup tabs

};