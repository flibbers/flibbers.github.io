 $(document).ready(function() {
 $('.thumbnail1').mouseover(function(){
  var newSrc = $(this).attr("src").replace("http://31.media.tumblr.com/8665c4aa2a6fecc5fb3b5aa36b6c464a/tumblr_n8q6an9ALt1r1pjv2o1_400.jpg", "http://33.media.tumblr.com/4d7f8d9187416216230e4bc29e1a8def/tumblr_nb5h6vWkap1r1pjv2o3_400.jpg");
  $(this).attr("src", newSrc); 
});
$('img').mouseout(function(){
  var newSrc = $(this).attr("src").replace("http://33.media.tumblr.com/4d7f8d9187416216230e4bc29e1a8def/tumblr_nb5h6vWkap1r1pjv2o3_400.jpg", "http://31.media.tumblr.com/8665c4aa2a6fecc5fb3b5aa36b6c464a/tumblr_n8q6an9ALt1r1pjv2o1_400.jpg");
  $(this).attr("src", newSrc); 
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

