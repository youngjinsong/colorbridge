/**
 * Home
 * @constructor
 */
function Home(parent) {
  console.log('Loaded Home', parent, parent.utils.isDirtyBrowser);

  /**
   * 영상 백그라운드 컬러가 PC마다 그래픽 랜더링 차이로 달라서 영상의 BG 추출.
   * 캔버스에 영상을 랜더링 후 특정 픽셀의 RGB값 추출.
   */
  function getVideoBackgroundColor(video) {
    $('body').append('<canvas></canvas>');
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');

    canvas.style.display = 'none';
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    var imgData = ctx.getImageData(0, 0, 2, 2).data;
    // console.log('확인 imgData', ctx.getImageData(0, 0, 2, 2));
    return [imgData[0], imgData[1], imgData[2]];
  }

  /**
   * 영상의 BG추출하여 적용.
   * @param {} value
   */
  function setBackgroundColor(value) {
    $('head').append('<style>body[data-page=home] { background: rgb(' + value + ') !important; }</style>');
  }

  /**
   * 비디오 로딩완료 체크하여 로딩 숨김처리함
   */
  function bindLoadedVideoEvent() {
    var video = document.getElementsByTagName('video')[0];

    video.onloadeddata = function() {
      parent.loader.hide();

      setTimeout(
        function() {
          var rgbArray = getVideoBackgroundColor(video);
          if (rgbArray[0] > 0) {
            setBackgroundColor(rgbArray);
          }
          $('canvas').remove();
        },
        parent.utils.isDirtyBrowser ? 200 : 100
      );
    };
  }

  function init() {
    parent.loader.show();
    bindLoadedVideoEvent();
  }

  this.init = init;
}
