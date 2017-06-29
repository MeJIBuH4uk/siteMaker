$(document).ready( function () {
    $(".nav-button").click(function() {
        $($('nav').toggle('slow'));
        return false;
    });
});