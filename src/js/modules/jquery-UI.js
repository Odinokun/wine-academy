module.exports = function () {

  // BEGIN   jqueryUI

  $(function () {
    $(".select-ui").selectmenu({
      open: function () {
        $(this).selectmenu("menuWidget").addClass("index-search__form-select");
      }
    })
  });


  //begin даты в фильтре каталога
  $( function() {
    $( ".filter-date__datepicker" ).datepicker({
      dateFormat : "yy-mm-dd",
      minDate: new Date($('#hiddendelivdate').val()),
      monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    });
  } );
  //end даты в фильтре каталога

  //begin range slider в фильтре каталога
  $( function() {
    $( ".filter-price__range" ).slider({
      range: true,
      min: 1300,
      max: 40000,
      values: [ 1300, 40000 ],
      slide: function( event, ui ) {
        $( ".filter-price__one" ).val(ui.values[ 0 ]);
        $( ".filter-price__two" ).val(ui.values[ 1 ]);
        $( ".filter-price__range-vol-left" ).html(ui.values[ 0 ]);
        $( ".filter-price__range-vol-right" ).html(ui.values[ 1 ]);
      }
    });

    $( ".filter-price__one" ).val( $( ".filter-price__range" ).slider( "values", 0 ));
    $( ".filter-price__two" ).val( $( ".filter-price__range" ).slider( "values", 1 ) );

    $( ".filter-price__range-vol-left" ).html( $( ".filter-price__range" ).slider( "values", 0 ));
    $( ".filter-price__range-vol-right" ).html( $( ".filter-price__range" ).slider( "values", 1 ) );
  } );
  //end range slider в фильтре каталога




  // END   jqueryUI

};