 $(document).ready(function() {
 	 $('.thumbnail1').hover(function () {
        this.src = '/images/signup_big_hover.png';
    }, function () {
        this.src = '/images/signup_big.png';
    });
 $('.thumbnail2').mouseenter(function() {
        $('.thumbnail2').fadeTo('fast', .25);
    });
 $('.thumbnail2').mouseleave(function() {
 		$('.thumbnail2').fadeTo('fast', 1);
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

