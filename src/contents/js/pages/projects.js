/**
 * Projects
 * @constructor
 */
function Projects() {
  var list = getProjectList();

  /**
   * 템플릿을 반환한다.
   * @param data
   * @returns {string}
   */
  function getTemplate(data) {
    var name = data.name;
    var path = data.path;
    var imageURL = data.imageURL;
    var description = data.description;

    return [
      '<li>',
        '<a href="#projects/' + path + '" title="' + name + '">',
          '<span class="image-wrap"><img src="' + imageURL + '" alt="' + name + '" /></span>',
          '<strong>' + name + '</strong>',
          '<p>' + description + '</p>',
        '</a>',
      '</li>'
    ].join('\n');
  }

  /**
   * 리스트를 렌더링 한다.
   * @param $target
   * @param arr
   */
  function renderList($target, arr) {
    var listHTML = '';

    arr.map(function(data, i) {
      listHTML += getTemplate(data);
    });

    return $target.html("<ul>" + listHTML + "</ul>");
  }

  /**
   * 배열중 현재 페이지의 index를 반환한다.
   * @param arr
   * @param currentPage
   * @returns {*}
   */
  function findIndex(arr, currentPage) {
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
   * @param index
   */
  function filterData(arr, index) {
    var result = [];
    var one;
    var two;

    if (index === 0) {
      one = index + 1;
      two = index + 2;
    } else if ((arr.length - 1) === index) {
      one = index - 2;
      two = index - 1;
    } else {
      one = index - 1;
      two = index + 1;
    }

    result.push(arr[one]);
    result.push(arr[two]);

    return result;
  }

  function init(options) {
    console.log('init', arguments);

    var $target = options.$appendTarget;
    var renderType = options.renderType;
    var currentPage = options.currentPage;

    if (renderType === 'all') {
      renderList($target, list);
    } else {
      var index = findIndex(list, currentPage);
      var data = filterData(list, index);
      renderList($target, data);
    }
  }

  $.extend(this, {
    init: init
  });
}
