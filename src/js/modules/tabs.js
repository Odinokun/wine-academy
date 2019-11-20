module.exports = function () {

  // begin tabs
  $('.wset-know__tabs .filter-btn').on('click', function (e) {

    e.preventDefault();

    let tabActive = $(this).data('tab');

    $('.wset-know__tabs .filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.wset-know__tabs .wset-know__tab').fadeOut(0);
    $('.wset-know__tabs .wset-know__tab--' + tabActive).fadeIn(0);

  });
  // end tabs

};