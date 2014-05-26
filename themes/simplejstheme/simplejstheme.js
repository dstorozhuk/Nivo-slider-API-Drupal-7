(function ($) {

NivoSliderApi.themes.simplejstheme = NivoSliderApi.themes.simplejstheme || {callbacks: {}};

NivoSliderApi.themes.simplejstheme.callbacks  = {
    afterChange: function(){
        var box = NivoSliderApi.themes.simplejstheme.box;
        var current_slide_no = box.data('nivo:vars').currentSlide;
        NivoSliderApi.themes.simplejstheme.box_status_current.html(current_slide_no + 1);
    },
    afterLoad: function(){

      var box = NivoSliderApi.themes.simplejstheme.box;
      var box_status = $('<div id="nivo-slider-status"></div>');
      var box_status_current = NivoSliderApi.themes.simplejstheme.box_status_current = $('<span class="current-slide"></span>');
      var box_status_total = $('<span class="total-slides"></span>');
      var total = box.data('nivo:vars').totalSlides;
      var current_slide_no = box.data('nivo:vars').currentSlide;
      box.prepend(box_status);
      box_status
        .append(box_status_current.html(current_slide_no + 1))
        .append(' / ')
        .append(box_status_total.html(total));
  }
};

})(jQuery);
