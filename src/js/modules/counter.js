module.exports = function () {

  // begin counter
  $('.basket-event__item-tickets button').on('click', function () {
    let counterWrap = $(this).parent('.basket-event__item-tickets');
    let counter = $(counterWrap).children('.basket-event__counter');
    let val = $(counter).val();

    if ($(this).hasClass('basket-event__up-count')) {
      val++;
    } else {
      val--;
    }

    val = val < 1 ? 1 : val;
    $(counter).val(val);
  });
  // end counter

};