module.exports = function() {

  // begin hide/open popup`s inputs
  $('.popup-recovery__radio input').on('click', function() {

    if($('.popup-recovery__radio-email').prop('checked')){
      $('.popup-input.popup-input--email').fadeIn(0);
      $('.popup-input.popup-input--phone').fadeOut(0);
    } else {
      $('.popup-input.popup-input--email').fadeOut(0);
      $('.popup-input.popup-input--phone').fadeIn(0);
    }
  });
  // end hide/open popup`s inputs

};