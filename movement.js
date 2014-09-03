var main = function() {
 $('.thumbnail').mouseenter(function() {
        $('.thumbnail').fadeTo('fast', 1);
    });
});

$(document).ready(main);