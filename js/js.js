$(document).ready( function () {
    $(".nav-button").click(function() {
        $($('nav').toggle('slow'));
        return false;
    });
	
	
	$('.basics .title').click(function () {
		$($('.basics .hr, .basics p, .basics ul').toggle('slow'));
		$($('.basics li p').css("display","inline"));
		$($('.basics .title').css("margin-bottom","0"));
		return false;
	});
	
	$('.tools .title').click(function () {
		$($('.tools .hr, .tools p, .tools ul').toggle('slow'));
		$($('.tools li p').css("display","inline"));
		$($('.tools .title').css("margin-bottom","0"));
		return false;
	});
	
	$('.programms .title').click(function () {
		$($('.programms .hr, .programms p, .programms ul').toggle('slow'));
		$($('.programms li p').css("display","inline"));
		$($('.programms .title').css("margin-bottom","0"));
		return false;
	});
});

$('.slider ul').bxSlider({
	mode: 'fade',
	captions: true,
	controls: true
});