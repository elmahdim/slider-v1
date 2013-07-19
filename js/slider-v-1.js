 /*! 
 *  Written for     : jQuery Slider plugin version 1
 *  Author          : @ElmahdiMahmoud
 *  Updated         : 19.07.2013
 *  Further changes : @ElmahdiMahmoud
 * Free to use under the GPLv2 license.
 */
(function ($) {
    $.fn.slider = function (options) {
        var settings = $.extend({
            'speed': 800
        }, options);
        var isA = false;
        return this.each(function () {
            var
            sliderWrapper = $(this),
                sliderList = sliderWrapper.children('ul'),
                sliderItem = sliderList.children('li'),
                buttons = sliderWrapper.children('button'),
                sliderItew = 800,
                slides = sliderItem.length,
                animateSlider = function (direction) {
                    sliderList.stop(true, true).animate({
                        "margin-left": direction + "=800"
                    }, settings.speed, null, function () {
                        isA = false;
                    });
                },
                isAtStart = function () {
                    return parseInt(sliderList.css('margin-left'), 10) === 0;
                },
                isAtEnd = function () {
                    var
						imageWidth = sliderItem.first().width(),
                        imageCount = sliderItem.length,
                        maxMargin = -1 * (imageWidth * (imageCount - 1));
                    return parseInt(sliderList.css('margin-left'), 10) === maxMargin;
                };
            sliderList.css({
                width: slides * sliderItew
            });
            buttons.on('click', function () {
                var
					_this = $(this),
                    isBackBtn = _this.hasClass('prev');

                if ((isBackBtn && isAtStart()) || (!isBackBtn && isAtEnd())) {
                    return;
                }
                if (!isA) {
                    isA = true;
                    animateSlider((isBackBtn ? '+' : '-'));
                }
            });
        });
    };
})(jQuery);