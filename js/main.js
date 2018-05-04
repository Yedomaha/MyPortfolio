$(document).ready(function(){
	$('.slick-slider').slick({
	});
});

 $(document).ready(function(){
    $(".qqq").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});