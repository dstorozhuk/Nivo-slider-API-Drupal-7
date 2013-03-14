<?php
// $Id$


/**
 * @file nivo-slider-api-wrapper.tpl.php
 * Main slider template
 * @see template_nivo_slider_api_wrapper_preprocess()
 */
?>

<div class="<?php print $classes; ?>">
  <div id="<?php print $name ?>" class="nivo-slider-api clearfix">
      <?php foreach ($items as $item): ?>
        <?php print $item; ?>
      <?php endforeach; ?>
    </div>
    <?php if (!empty($captions)): ?>
      <?php foreach ($captions as $id => $caption): ?>
        <div id="<?php print $id ?>" class="nivo-html-caption">
          <?php print $caption; ?>
        </div>
      <?php endforeach; ?>
    <?php endif; ?>
</div>

