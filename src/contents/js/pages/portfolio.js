/**
 *
 * @constructor
 */
function Portfolio() {
  var list = [
    {
      name: "iPortfolio",
      path: "iportfolio",
      imageURL: "/contents/img/portfolio/ipf.png",
      description: "Responsive Web Design/Development"
    },
    {
      name: "EBS Reading Club",
      path: "ebsrc",
      imageURL: "/contents/img/portfolio/ebsrc.png",
      description: "Product UI/UX Design, Web/App Design"
    },
    {
      name: "POP Reader",
      path: "popleader",
      imageURL: "/contents/img/portfolio/popleader.png",
      description: "Product UI/UX Design, Web/App Design"
    },
    {
      name: "Big Reading Club",
      path: "brc",
      imageURL: "/contents/img/portfolio/brc.png",
      description: "Product UI/UX Design, Web/App Design"
    },
    {
      name: "AR",
      path: "ar",
      imageURL: "/contents/img/portfolio/ar.png",
      description: "Product UI/UX Design, iOS Design"
    },
    {
      name: "ERA",
      path: "popleader",
      imageURL: "/contents/img/portfolio/era.png",
      description: "Product UI/UX Design, App Design"
    },
    {
      name: "Mom Talk",
      path: "momtalk",
      imageURL: "/contents/img/portfolio/momtalk.png",
      description: "Responsive Web Design/Development"
    },
    {
      name: "Mobizen",
      path: "mobizen",
      imageURL: "/contents/img/portfolio/mobizen.png",
      description: "Frontend Development (Back Up, Setting, Help)"
    },
    {
      name: "Mobizen Help",
      path: "mobizen-help",
      imageURL: "/contents/img/portfolio/mobizen-help.png",
      description: "Frontend Development"
    },
    {
      name: "Knowre",
      path: "knowre",
      imageURL: "/contents/img/portfolio/knowre.png",
      description: "Responsive Web Design/Development"
    }
  ];

  function getTemplate(data) {
    var name = data.name;
    var path = data.path;
    var imageURL = data.imageURL;
    var description = data.description;

    return [
      '<li>',
        '<a href="#portfolio/' + path + '" title="' + name + '">',
          '<img src="' + imageURL + '" alt="' + name + '" />',
          '<strong>' + name + '</strong>',
          '<p>' + description + '</p>',
        '</a>',
      '</li>'
    ].join('\n');
  }

  function renderList($target, arr) {
    console.log('renderList', arguments);

    var listHTML = '';
    arr.map(function(data, i) {
      listHTML += getTemplate(data);
    });

    $target.html("<ul>" + listHTML + "</ul>");
  }

  function findIndex(arr, currentPage) {
    console.log('findIndex', arguments);

    var i;

    for (i = 0; i < arr.length; i++) {
      if (arr[i].path === currentPage) {
        break;
      }
    }

    return i;
  }

  /**
   * 기본적으로 배열의 양 옆을 추출 한다.
   * 하지만 처음과 마지막의 경우 근접 2개의 값을 추출 한다.
   * @param arr
   * @param currentPage
   */
  function filterData(arr, currentPage) {

  }

  function init(options) {
    console.log('init', arguments);

    var $target = options.$appendTarget;
    var renderType = options.renderType;
    var currentPage = options.currentPage;

    if (renderType === 'all') {
      renderList($target, list);
    } else {
      console.log('확인 인덱스', findIndex(list, currentPage));
      renderList($target, list);
    }
  }

  $.extend(this, {
    init: init
  });
}
