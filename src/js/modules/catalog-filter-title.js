module.exports = function () {

  $('.catalog-filter__title').on('click', function () {
    let wrapper = $(this).parents('.catalog-filter__item');

    if($(this).hasClass('active')){
      $(wrapper).children('.catalog-filter__item-body').slideUp();
      $(this).removeClass('active');
      $(wrapper).removeClass('active');
    } else {
      $(wrapper).children('.catalog-filter__item-body').slideDown();
      $(this).addClass('active');
      $(wrapper).addClass('active');
    }
  });

};