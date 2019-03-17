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
   * 기본적으로 배열의 앞, 뒤 값을 추출 한다.
   * @param arr
   * @param insertedIndex
   */
  function filterData(arr, insertedIndex) {
    var length = 3;
    var result = [];
    var indexArr = [];
    var startIndex;

    // 첫번째 (1, 2, 3)
    if (insertedIndex === 0) {
      startIndex = 1;
      for (var i = startIndex; i <= length; i++) {
        indexArr.push(insertedIndex + i);
      }
      // 마지막 (-3, -2, -1)
    } else if (insertedIndex === (arr.length - 1)) {
      startIndex = -3;
      for (var i = startIndex; i <= startIndex + (length - 1); i++) {
        indexArr.push(insertedIndex + i);
      }
      // 마지막에서 두번째 (-2, -1, 1)
    } else if (insertedIndex === (arr.length - 2)) {
      startIndex = -2;
      for (var i = startIndex; i <= startIndex + length; i++) {
        if (i !== 0) {
          indexArr.push(insertedIndex + i);
        }
      }
      // 기본 양 옆 (-1, 1, 2)
    } else {
      startIndex = -1;
      for (var i = startIndex; i <= startIndex + length; i++) {
        if (i !== 0) {
          indexArr.push(insertedIndex + i);
        }
      }
    }

    indexArr.map(function(item) {
      result.push(arr[item]);
    });

    return result;
  }

  function init(options) {
    console.log('init', arguments);

    var $target = options.$appendTarget;
    var renderType = options.renderType;
    var currentPage = options.currentPage;

    // 전체목록
    if (renderType === 'all') {
      renderList($target, list);

    // 페이지네이션
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
