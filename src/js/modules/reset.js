module.exports = function () {

  //begin сброс даты в фильтре каталога
  function dateReset() {
    $('.filter-date__datepicker').datepicker('setDate', null);
  }

  $('.catalog-filter__reset--date').on('click', function (e) {
    e.preventDefault();
    dateReset();
  });
  //end сброс даты в фильтре каталога

  //begin сброс цены в фильтре каталога
  function priceReset() {
    var range = $( ".filter-price__range" );
    var optionsPrice = $(range).slider('option');

    $(range).slider('values', [optionsPrice.min, optionsPrice.max]);
    $( ".filter-price__one" ).val( $(range).slider( "values", 0 ));
    $( ".filter-price__two" ).val( $(range).slider( "values", 1 ) );
    $( ".filter-price__range-vol-left" ).html($(range).slider( "values", 0 ));
    $( ".filter-price__range-vol-right" ).html($(range).slider( "values", 1 ));
  }

  $('.catalog-filter__reset--price').on('click', function (e) {
    e.preventDefault();
    priceReset();
  });
  //end сброс цены в фильтре каталога

  //begin сброс отмеченных checkbox
  $('.catalog-filter__reset--checkbox').on('click', function (e) {
    e.preventDefault();
    var checkboxParent = $(this).parents('.catalog-filter__item');

    $(checkboxParent).find('input').prop('checked',false)
  });
  //end сброс отмеченных checkbox


  $('.filter-all__reset').on('click', function (e) {
    e.preventDefault();
    dateReset();
    priceReset();

    $('.catalog-filter__item').find('input').prop('checked',false)
  });
};