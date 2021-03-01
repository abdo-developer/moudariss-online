
// Dyanamique Date Year Footer -- Copyright


jQuery(function () {

    // Copyright

    $("#copyright").text(" © All Rights Reserved For website | 2020 - " + new Date().getFullYear());

    // CountTo Jquery

    $('.timer').countTo();

    // Scroll hash 

    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html,body').animate({ scrollTop: $(hash).offset().top }, 800, function () { })
    });

    // Slider Range Experience Years min : 2 years - max : 50 years

    $("#slider-range").slider({
        range: true,
        min: 2,
        max: 50,
        values: [5, 20],
        slide: function (event, ui) {
            $("#experience").val(ui.values[0] + " Years " + "  -  " + ui.values[1] + " Years ");
        }
    });
    $("#experience").val($("#slider-range").slider("values", 0) + " Years" +
        "  -  " + $("#slider-range").slider("values", 1) + " Years ");


    // Slider Range Price min : 50 Dollar - max : 1000 Dollar

    $("#slider-range-one").slider({
        range: true,
        min: 50,
        max: 1000,
        values: [50, 1000],
        slide: function (event, ui) {
            $("#Price").val(ui.values[0] + " Dollar " + "  -  " + ui.values[1] + " Dollar ");
        }
    });
    $("#Price").val($("#slider-range-one").slider("values", 0) + " Dollar" +
        "  -  " + $("#slider-range-one").slider("values", 1) + " Dollar ");

        // Ratings
        $("#slider-range-two").slider({
            range: true,
            min: 1,
            max: 5,
            values: [1, 5],
            slide: function (event, ui) {
                $("#Ratings").val(ui.values[0] + " Stars " + "  -  " + ui.values[1] + " Stars ");
            }
        });
        $("#Ratings").val($("#slider-range-two").slider("values", 0) + " Star" +
            "  -  " + $("#slider-range-two").slider("values", 1) + " Stars ");

        // Slide range promotions
        $("#slider-range-promotion").slider({
            range: true,
            min: 50,
            max: 1000,
            values: [50, 1000],
            slide: function (event, ui) {
                $("#Promotions").val(ui.values[0] + " Dollar " + "  -  " + ui.values[1] + " Dollar ");
            }
        });
        $("#Promotions").val($("#slider-range-promotion").slider("values", 0) + " Dollar" +
            "  -  " + $("#slider-range-promotion").slider("values", 1) + " Dollar ");

        // CountrySelector

        $("#country").countrySelect();

        // More country
        $("#country-more").countrySelect();

        // Time x:00
        // $("#number").intlTelInput(); 

});

