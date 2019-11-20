module.exports = function () {

  //begin open header dropdown
  $('.dropdown-arr').on('click', function () {
    let arr = $('.dropdown-arr');
    let list = $('.dropdown-list');
    let thisWrap = $(this).parents('.dropdown-wrap');
    let closeBtn = $('.burger--close');

    $(arr).removeClass('active');
    $(this).addClass('active');
    $(closeBtn).addClass('active');
    $(list).slideUp();
    $(thisWrap).children(list).slideDown();
  });
  //end open header dropdown

  //begin close header dropdown
  $(document).mouseup(function (e) {
    let arr = $(".dropdown-arr");
    let list = $(".dropdown-list");
    let closeBtn = $('.burger--close');

    if (!list.is(e.target)) {
      list.slideUp();
      arr.removeClass('active');
      $(closeBtn).removeClass('active');
    }
  });
  //end close header dropdown

};