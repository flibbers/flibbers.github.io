var main = function() {
$("img").hover(function() {
		$(this).attr("src","http://31.media.tumblr.com/76e42c52437ab9f99ed2d36646293d2f/tumblr_nb5h6vWkap1r1pjv2o1_400.jpg");
			}, function() {
		$(this).attr("src","https://31.media.tumblr.com/8665c4aa2a6fecc5fb3b5aa36b6c464a/tumblr_n8q6an9ALt1r1pjv2o1_400.jpg");
	});
});

$(document).ready(main);