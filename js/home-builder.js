/* ============================================================
 * BUILDER SCRIPT
 =========================================================== */
/* VARIABLES INITIALIZATION */
var builder = $('#builder')
var body = $('body')
$(document).ready(function() {
    'use strict';
    toggleBuilder();
    builderScroll();
    tooltipBuilder();
});
// SHOW / HIDE BUILDER
function toggleBuilder() {
    $('.builder-toggle').on('click', function() {
        if ($('#builder').hasClass('open')) {
            $('#builder').removeClass('open');
        } else {
            $('#builder').addClass('open');
        }
  });
    body.click(function(e) {
        if ($(e.target).parents('#builder').length || $(e.target).parents('.builder-toggle').length) {
            return;
        }
        if (builder.hasClass('open') === true) {
            builder.removeClass('open');
        }

    });
}

// TOOLTIP BUILDER
function tooltipBuilder() {
    if ($('.tooltip-builder').length) {
        $('.tooltip-builder').each(function() {
            if ($(this).data('pos-top')) {
                var tooltipPositionTop = $(this).data('pos-top');
                $(this).css('top', tooltipPositionTop);
            }
            if ($(this).data('pos-left')) {
                var tooltipPositionTop = $(this).data('pos-left');
                $(this).css('left', tooltipPositionTop);
            }
            var tooltipHeight = $('.tooltip-popup').height() + 40;
            var tooltipWidth = $('.tooltip-popup').width();
            $('.tooltip-popup').addClass('tooltip-hidden');
            $('.tooltip-icon, .close-tooltip-popup').click(function() {
                if ($('.tooltip-popup').hasClass('tooltip-visible')) {
                    closeTooltipBuilder();
                } else {
                    $('.tooltip-popup').css('visibility', 'visible');
                    $('.tooltip-popup').animate({
                        opacity: 1,
                        width: tooltipWidth,
                        height: tooltipHeight,
                        padding: '20px 15px'
                    }, 400, function() {
                        $('.tooltip-popup').addClass('tooltip-visible').removeClass('tooltip-hidden');
                    });
                    setTimeout(function() {
                        $('.tooltip-wrapper').css('opacity', 1);
                    }, 300);
                }
            });

            body.click(function(e) {
                if ($(e.target).parents('.tooltip-builder').length || $(e.target).is('tooltip-builder')) {
                    return;
                }
                if ($('.tooltip-popup').hasClass('tooltip-visible') === true) {
                    closeTooltipBuilder();
                }
            });

            function closeTooltipBuilder() {
                $('.tooltip-wrapper').css('opacity', 0);
                setTimeout(function() {
                    $('.tooltip-popup').animate({
                        opacity: 0,
                        width: 0,
                        height: 0,
                        padding: 0
                    }, 400, function() {
                        $('.tooltip-popup').addClass('tooltip-hidden').removeClass('tooltip-visible');
                    });
                }, 200);
            }

        });

    }
}

// CUSTOM SCROLL BUILDER
function builderScroll() {
    if ($.fn.slimScroll) {
        $('.builder .inner').slimScroll({
            color: '#8F8F8F',
            size: '5px',
            height: '100%',
            alwaysVisible: false
        });
    }
}
