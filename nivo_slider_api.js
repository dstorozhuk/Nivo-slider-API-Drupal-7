(function($) {

    Drupal.behaviors.nivo_slider_api = {
        attach: function(context) {
            $('.nivo-slider-api', context).once('nivo-slider-api', function() {
                var vns = $(this);
                var id = vns.attr('id');
                var cfg = Drupal.settings.nivo_slider_api[id];
                var final_cfg = cfg;
                // add theme callback
                if (typeof Drupal.settings.nivo_slider_api[id].theme_name !== 'undefined') {
                    var theme_name = Drupal.settings.nivo_slider_api[id].theme_name;
                    var theme_callbacks = Drupal.nivo_slider_api.themes[theme_name].callbacks;
                    Drupal.nivo_slider_api.themes[theme_name].box = vns;
                    final_cfg = $.extend({}, cfg, theme_callbacks);
                }

                // Fix sizes
                vns.data('hmax', 0).data('wmax', 0);
                $('img', vns).each(function() {
                    $(this).load(function() {
                        hmax = (vns.data('hmax') > $(this).height()) ? vns.data('hmax') : $(this).height();
                        wmax = (vns.data('wmax') > $(this).width()) ? vns.data('wmax') : $(this).width();
                        vns.width(wmax).height(hmax).data('hmax', hmax).data('wmax', wmax);
                    });
                });

                vns.nivoSlider(final_cfg);
            });
        }
    };
    // name space for themes
    Drupal.nivo_slider_api = Drupal.nivo_slider_api || {
        themes: {}
    };
})(jQuery);