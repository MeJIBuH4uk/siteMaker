$(document).ready( function () {
    $(".nav-button").click(function() {
        $($('nav').toggle('slow'));
        return false;
    });
});

$('.basics .title').click(function () {
    $($('.basics .hr, .basics p, .basics ul').toggle('slow'));
    $($('.basics .title').css("margin-bottom","0"));
    return false;
});
$('.tools .title').click(function () {
    $($('.tools .hr, .tools p, .tools ul').toggle('slow'));
    $($('.tools .title').css("margin-bottom","0"));
    return false;
});
$('.programms .title').click(function () {
    $($('.programms .hr, .programms p, .programms ul').toggle('slow'));
    $($('.programms .title').css("margin-bottom","0"));
    return false;
});