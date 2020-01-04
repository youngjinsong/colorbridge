function Remember() {
  console.log('Loaded Remember');

  var $screenShots;
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
      description: ['알림 창의 토글 기능을 손쉽게 하기 위해 닫기 버튼의 위치를 변경했습니다.'],
    },
  };

  function changeImage(name) {
    $screenShots.find('.images .active').removeClass('active');
    $screenShots.find('.images [alt=' + name + ']').addClass('active');
  }

  function changeDescription(name) {
    var description = screenshots[name].description;
    console.log(description);
  }

  function bindScreenShotClickEvent() {
    console.log('bindScreenShotClickEvent');

    $screenShots.on('click', 'button', function() {
      var $this = $(this);
      var name = $(this).data('name');

      $this.siblings().removeClass('active');
      $this.addClass('active');
      changeImage(name);
      changeDescription(name);
    });
  }

  function init() {
    $screenShots = $('#screen-shots');
    bindScreenShotClickEvent();
  }

  // exports
  this.init = init;
}

// {
//   /* <button type="button" data-name="aside">Aside</button>
//             <button type="button" data-name="message">Message</button>
//             <button type="button" data-name="notification">Notification</button>
//             <button type="button" data-name="list">명함 목록</button>
//             <button type="button" data-name="profile">Profile</button>
//             <button type="button" data-name="share">Share</button>
//             <button type="button" data-name="detail">명함 상세</button> */
// }
