
// Dyanamique Date Year Footer -- Copyright


jQuery(function () {

    // Copyright

    $("#copyright").text(" © All Rights Reserved For website | 2020 - " + new Date().getFullYear());

    // CountTo Jquery

    $('.timer').countTo();

    // Scroll hash 

    $("a.scroll").on('click', function(event){

        var hash = this.hash;

        $('html,body').animate({scrollTop: $(hash).offset().top},800,function(){})
    });

    // Slider Range

    $( "#slider-range" ).slider({
        range: true,
        min: 2,
        max: 50,
        values: [ 2, 50 ],
        slide: function( event, ui ) {
          $( "#experience" ).val(ui.values[ 0 ] +  " Years "  +  "  -  " + ui.values[ 1 ] + " Years " );
        }
      });
      $( "#experience" ).val( $( "#slider-range" ).slider( "values", 0 ) + " Years" +
        "  -  " + $( "#slider-range" ).slider( "values", 1 ) + " Years " );
});


// jQuery(function () {

//     $("#copyright").text(" © All Rights Reserved For website | 2020 - " + new Date().getFullYear());

//     $('.timer').countTo();

// });



// &copy; 
