/*
    MagicNav - The jQuery magicNav for creating magical scrollTo navigation
    by John Polacek (@johnpolacek)
    
    Dual licensed under MIT and GPL.

    Dependencies: jQuery
*/

;(function($) {

    $.MagicNav = function($nav, $navTo, options) {

        var magicNav = this;

        var defaults = {
            // titles
            // default is 'text', which will generate titles by doing .text() on the navTo elements
            // or pass an attribute - e.g. title:'data-title' to do .attr('data-title') on navTo elements
            titles:'text',
            // default is easeInOutQuad
            ease: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            // duration of scrolling to animation
            duration:1000,
            // amount to offset the scroll position
            offset:0
        };

        var i,
            numItems = $navTo.length;
            
        magicNav.settings = $.extend({}, defaults, options);

        // create function to get title from element .text() or attr('data-whatever')
        var getTitle = magicNav.settings.titles === 'text' ?
            function($el) {return $el.text();} :
            function($el) {return $el.attr(magicNav.settings.titles);};

        var navMarkup = '';
        for (i=0; i<numItems; i++) {
            navMarkup += '<a class="magicnav-link">'+getTitle($navTo.eq(i))+'</a>';
        }
        $nav.html(navMarkup);
        $('.magicnav-link').on('click',function() {
            $('html,body').animate(
                {scrollTop: $navTo.eq($(this).index()).offset().top+magicNav.settings.offset},
                magicNav.settings.duration,
                magicNav.settings.ease);
        });
    };

})(jQuery);