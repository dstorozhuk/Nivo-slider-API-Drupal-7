DESCRIPTION

Nivo slider API theme - is a developer theme to easy construct and output
the new nivo slider instance. It hasn't any UI, so you are responsible to
creating and outputting the slider.

USAGE

For usage example see nivo_slider_api_test() (/nivo-slider-api-test)
In short: use theme "nivo_slider_api" as usually to render slider.
To create theme which support nivo slider callbacks see 'simplejstheme' theme

FEATURES

* Support javascript in slider themes!
  You can use nivo slider callbacks like 'beforeChange', 'afterChange' etc.
  to make some changes in in your slider theme. see 'simplejstheme' theme
* Multi instances. You be able to generate different slider on one page
* Fully customisable

INSTALATION

1. Download and copy nivo-slider library (3.1). It can be found here
  http://www.jsdelivr.com/#!nivoslider

  The slider library must be placed here:
    /sites/all/libraries/nivo-slider
  So, the full path to .js file is
    /sites/all/libraries/nivo-slider/jquery.nivo.slider.pack.js
2. Copy module and enable as usually
3. Finish! Use theme 'nivo_slider_api' in your code.

REQUIREMENTS

nivo-slider library 3.1

Why 3.1? it work well with jQuery 1.4.4 without any updates.
