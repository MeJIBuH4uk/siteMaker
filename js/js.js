function resizeSquare () {
    var $square = $('#square');
    var width = $square.width();
    console.log( width );
    $square.css("height", width + "px");
}

$(document).ready( function () {
    resizeSquare();
    $(window).on('resize', resizeSquare );
});

$(document).ready( function () {
    $(document).ready(function() {
        slider = $('.slider-big ul').lightSlider({
            item:1,
            loop:true,
            slideMove:1,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600
        });
    });
});