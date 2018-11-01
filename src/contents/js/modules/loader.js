/**
 *
 * @constructor
 */
function Loader() {
  this.append = function($target) {
    console.log('loader', $target);

    $target.append([
      '<div class="loader-wrap">',
      ' <div class="loader">Loading...</div>',
      '</div>'
    ].join('\n'));
  };

  this.show = function() {
    $('.loader-wrap').show();
  };

  this.hide = function() {
    $('.loader-wrap').hide();
  };
}