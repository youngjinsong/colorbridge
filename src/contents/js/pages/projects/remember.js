function Remember() {
  console.log('Loaded Remember');

  var screenshots = {
    gnb: {
      description: [
        '우측 내 프로필의 드롭다운 메뉴에 노출된 명함 상태 정보 (입력 중인 명함, 입력할 수 없는 명함)는 Sidebar 명함 관리 하위에 포함했습니다.',
        '우측 내 프로필의 드롭다운 메뉴에 공지사항, 도움말, 문의하기를 사용자가 쉽게 열람 및 접근하도록 Sidebar 영역으로 이동하였습니다.',
        '아이콘 메뉴들은 마우스 Hover시 툴팁을 제공하여 해당 기능을 좀 더 명확하게 알 수 있도록 하였습니다.',
      ],
    },
    aside: {
      description: [
        '기능의 레벨링을 정의하고 재배치하였습니다.',
        '내 명함첩, 팀 명함첩 메뉴를 Sidebar 영역으로 배치하여 화면 전환 없이 전체 목록 관리가 가능하도록 하였습니다.',
        '기존 화면의 휴지통을 찾지 못함, 휴지통 메뉴를 노출하여 사용자가 인지할 수 있도록 하였습니다.',
      ],
    },
    message: {
      description: [
        '메시지 팝업 창 내에서 1:1 채팅을 시작할 수 있도록 기능을 추가하였습니다.',
        '넓은 공간을 활용하기 위해 메시지 노출 글자수를 기존 1줄에서 2줄로 변경했습니다.',
      ],
    },
    notification: {
      description: ['알림 창의 토글 기능을 손쉽게 하기 위해 닫기 버튼의 위치를 변경했습니다.'],
    },
    list: {
      description: [
        '목록에서도 상세 메뉴를 사용할 수 있도록 버튼을 추가하였습니다.',
        '하단 페이지네이션이 좌-우 버튼이 아닌, 하단 스크롤시 추가 로딩 방식으로 스크롤 UX 흐름에 통일시켰습니다.',
        '상세 메뉴가 있는 Aside 영역과 명함 목록에서 마우스 우클릭을 하면 컨텍스트 메뉴(보조 수단)를 제공하여 좀 더 편리하게 사용할 수 있도록 하였습니다.',
      ],
    },
    share: {
      description: [
        '조직 구성원 추가 시 내용만 복사해서 링크를 전달해야 하는 것은 다소 기능이 부족해 보여 공유 옵션을 추가했습니다. (이메일로 보내기, 문자로 보내기 등 연동 제공 필요)',
      ],
    },
    profile: {
      description: [
        '우측 내 프로필의 이메일 정보가 말 줄임표로 잘리는 부분을 알 수 있도록 하였습니다. (Max Width를 넘어 발생한 말줄임 정보는 Title 속성 제공 필요함)',
        '프로필 이미지가 비어있으면 서비스가 허전하게 보이기 때문에 기본 알파벳 프로필과 선택할 수 있는 이미지 모음을 제공하였습니다.',
      ],
    },
    detail: {
      description: [
        '상단 메뉴를 재배치하였습니다.',
        '명함 이미지 뒷면을 쉽게 볼 수 있도록 슬라이드 내비게이션을 추가하였습니다.',
        '명함 전달 기능 레이어 팝업에 공유 수단 추가하였습니다.',
      ],
    },
    before: {
      description: [
        '현재 서비스는 뎁스가 깊고 예측하기 어려운 메뉴로 구성되어있습니다.',
        '명함 목록의 개수에 따라 컨테이너들의 높이가 불규칙하게 나열되어 레이아웃이 다소 불안정한 느낌을 받았습니다.',
        'PC의 넓은 화면을 활용해 안정감을 주고 관리가 용이한 레이아웃을 제공하는 것이 주요 개선점입니다.',
      ],
    },
  };
  var $screenShots;
  var $screenShotDesc;

  function changeImage(name) {
    $screenShots.find('.images .active').removeClass('active');
    $screenShots.find('.images [alt=' + name + ']').addClass('active');
  }

  function changeDescription(name) {
    var description = screenshots[name].description;
    var result = [];

    description.map(function(data) {
      result.push('<li>' + data + '</li>');
    });

    $screenShotDesc.html(result);
  }

  function bindScreenShotClickEvent() {
    console.log('bindScreenShotClickEvent');

    $screenShots.on('click', 'button', function() {
      var $this = $(this);
      var name = $(this).data('name');

      $this.siblings().removeClass('active');
      $this.addClass('active');
      // fireFlash();
      changeImage(name);
      changeDescription(name);
    });
  }

  /**
   * 시각적 플레시 효과
   */
  function fireFlash() {
    if (!$('#shot-flash').length) {
      $screenShots.find('.images').append('<div id=shot-flash></div>');
    }
    var $shotFlash = $('#shot-flash');
    $shotFlash.addClass('visible');

    setTimeout(function() {
      $shotFlash.removeClass('visible');
    }, 60);
  }

  function initScreenShot() {
    var name = 'gnb';
    $screenShots.find('[data-name=' + name + ']').addClass('active');
    changeImage(name);
    changeDescription(name);
    bindScreenShotClickEvent();
  }

  function init() {
    $screenShots = $('#screen-shots');
    $screenShotDesc = $('#image-description');
    initScreenShot();
  }

  // exports
  this.init = init;
}
