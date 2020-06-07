function Iportpolio() {
  console.log('Loaded Iportpolio');

  function setVideoSpeed($target, speed) {
    var video = $target[0];

    if (video && speed) {
      video.playbackRate = speed;
    }
  }

  function init() {
    setVideoSpeed($('#preview-video'), 2);
  }

  // exports
  this.init = init;
}
