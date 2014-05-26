(function ($, w) {

  "use strict";

  w.NivoSliderApi = w.NivoSliderApi || {themes: {}};

  Drupal.behaviors.nivo_slider_api = {
    attach: function (context) {
      $('.nivo-slider-api', context).once('nivo-slider-api', function () {
        var vns = $(this);
        var id = vns.attr('id');
        var cfg = drupalSettings.nivo_slider_api[id];
        var final_cfg = cfg;
        // add theme callback
        if (typeof drupalSettings.nivo_slider_api[id].theme_name !== 'undefined') {
          var theme_name = drupalSettings.nivo_slider_api[id].theme_name;
          var theme_callbacks = NivoSliderApi.themes[theme_name].callbacks;
          NivoSliderApi.themes[theme_name].box = vns;
          final_cfg = $.extend({}, cfg, theme_callbacks);
        }

        // Fix sizes
        vns.data('hmax', 0).data('wmax', 0);
        $('img', vns).each(function () {
          $(this).load(function () {
            var hmax = (vns.data('hmax') > $(this).height()) ? vns.data('hmax') : $(this).height();
            var wmax = (vns.data('wmax') > $(this).width()) ? vns.data('wmax') : $(this).width();
            vns.width(wmax).height(hmax).data('hmax', hmax).data('wmax', wmax);
          });
        });

        vns.nivoSlider(final_cfg);
      });
    }
  };
  // name space for themes
//  NivoSliderApi = NivoSliderApi || {
//    themes: {}
//  };
})(jQuery, window);
