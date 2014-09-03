 $(document).ready(function() {
    $('.thumbnail1').mouseenter(function() {
        $('.thumbnail1').replaceWith('<img src="http://33.media.tumblr.com/4d7f8d9187416216230e4bc29e1a8def/tumblr_nb5h6vWkap1r1pjv2o3_250.jpg">');
    });
    $('.thumbnail1').mouseleave(function() {
        $('<img src="http://33.media.tumblr.com/4d7f8d9187416216230e4bc29e1a8def/tumblr_nb5h6vWkap1r1pjv2o3_250.jpg">').replaceWith('.thumbnail1');
    });
 $('.thumbnail3').mouseenter(function() {
        $('.thumbnail3').fadeTo('fast', .25);
    });
 $('.thumbnail3').mouseleave(function() {
 		$('.thumbnail3').fadeTo('fast', 1);
 	}); 
 $('.thumbnail4').mouseenter(function() {
        $('.thumbnail4').fadeTo('fast', .25);
    });
 $('.thumbnail4').mouseleave(function() {
 		$('.thumbnail4').fadeTo('fast', 1);
 	});
  $('.thumbnail5').mouseenter(function() {
        $('.thumbnail5').fadeTo('fast', .25);
    });
 $('.thumbnail5').mouseleave(function() {
 		$('.thumbnail5').fadeTo('fast', 1);
 	});
  $('.thumbnail6').mouseenter(function() {
        $('.thumbnail6').fadeTo('fast', .25);
    });
 $('.thumbnail6').mouseleave(function() {
 		$('.thumbnail6').fadeTo('fast', 1);
 	});
});

