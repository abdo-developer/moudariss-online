
// Dyanamique Date Year Footer -- Copyright


jQuery(function () {

    $("#copyright").text(" © All Rights Reserved For website | 2020 - " + new Date().getFullYear());

    $('.timer').countTo();

    $("a.scroll").on('click', function(event){

        var hash = this.hash;

        $('html,body').animate({scrollTop: $(hash).offset().top},800,function(){})
    });

});


// jQuery(function () {

//     $("#copyright").text(" © All Rights Reserved For website | 2020 - " + new Date().getFullYear());

//     $('.timer').countTo();

// });



// &copy; 
