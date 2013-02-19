(function ($) {

Drupal.behaviors.vanilla_nivo_slider = {
  attach: function (context) {
    $('.vanilla-nivo-slider', context).once('vanilla-nivo-slider', function() {
      var vns = $(this);
      var id = vns.attr('id');
      var cfg = Drupal.settings.vanilla_nivo_slider[id];

      // Fix sizes
      vns.data('hmax', 0).data('wmax', 0);
      $('img', vns).each(function () {
        $(this).load(function() {
          hmax =  (vns.data('hmax') > $(this).height()) ? vns.data('hmax') : $(this).height();
          wmax =  (vns.data('wmax') > $(this).width()) ? vns.data('wmax') : $(this).width();
          vns.width(wmax).height(hmax).data('hmax', hmax).data('wmax', wmax);
        });
      });

      vns.nivoSlider(cfg);
    });
  }
};

})(jQuery);

