var main = function() {
 $('.thumbnail').mouseenter(function() {
        $('.thumbnail').fadeTo('fast', .25);
    });
});

$(document).ready(main);