module.exports = function () {

  // begin accordeon
  $('.course-tab__row').on('click', function () {
    if ($(this).hasClass('active')){
      $('.course-tab__row').removeClass('active');
      $('.course-tab__row').children('.course-tab__answer').slideUp();
    } else{
      $('.course-tab__row').children('.course-tab__answer').slideUp();
      $('.course-tab__row').removeClass('active');

      $(this).addClass('active');
      $(this).children('.course-tab__answer').slideDown();
    }
  });
  // end accordeon

};