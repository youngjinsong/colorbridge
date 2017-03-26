var Bookish = window.Bookish || {};

Bookish.books = Bookish.books || [];
Bookish.books.push({"title":"The Wind in the Willows","slug":"wind-in-the-5f382f","url":"https://wind-in-the-5f382f.booki.sh/","cover_url":"https://booki-sh-covers-image.s3.amazonaws.com/1303/face.jpg?1300857731","cover_dimensions":[1025,1504],"cover_color":["18","119","161"]});
Bookish.books.find = function (key, val) {
  for (var i = 0, ii = Bookish.books.length; i < ii; ++i) {
    var bk = Bookish.books[i];
    if (typeof val == 'function') {
      if (val(bk[key])) { return bk; }
    } else if (bk[key] == val) {
      return bk;
    }
  }
}


// A little shortcut if you only have one book data object.
//
Bookish.embedIt = function (target, options) {
  Bookish.embed(target, null, options);
}


// ARGS
//   1) id or DOM element in which the book should be embedded
//   2) book data object, or book slug, or null (will just select first book)
//   3) options
//
// OPTIONS
//   styleElements -- applies decorative styles to veneer, titlebar, etc
//   varyDimension -- if not indicated, cover image is stretched to
//     width/height of the target. If 'width', width of target is
//     (cover.width * (target.height / cover.height)). If 'height',
//     height of target is (cover.height * (target.width / cover.height)).
//   titlebar -- whether to create the titlebar element
//   fadeDuration -- how long the cover should take to disappear.
//   onOpen -- callback when the book frame is created
//
Bookish.embed = function (target, dataOrSlug, options) {
  var p = {
    options: options || {},
    cover: null,
    coverImage: null,
    veneer: null,
    titlebar: null
  }


  if (typeof target == 'string') {
    p.target = document.getElementById(target);
  } else {
    p.target = target;
  }


  if (!dataOrSlug) {
    p.data = Bookish.books[0];
  } else if (typeof dataOrSlug == 'string') {
    p.data = Bookish.books.find('slug', dataOrSlug);
    if (!p.data) {
      throw('Book not found for '+dataOrSlug+'. Aborting.');
    }
  } else {
    Bookish.books.push(p.data = dataOrSlug);
  }


  var forcePosition = function (elem) {
    var pos;
    if (document.defaultView) {
      var currStyle = document.defaultView.getComputedStyle(elem, null);
      pos = currStyle.getPropertyValue('position');
    } else if (elem.currentStyle) {
      pos = elem.currentStyle.position;
    }
    if (pos != 'absolute' && pos != 'relative' && pos != 'fixed') {
      elem.style.position = 'relative';
    }
  }


  var fullSizeElement = function (elem) {
    elem.style.position = 'absolute';
    elem.style.top = 0;
    elem.style.right = 0;
    elem.style.bottom = 0;
    elem.style.left = 0;
    elem.style.width = '100%';
    elem.style.height = '100%';
  }


  var fade = function (elem, duration, callback) {
    var setOpacity = function (f) {
      /* TODO: support IE, etc */
      elem.style.opacity = f;
    }
    var curr = 1;
    var stamp = (new Date()).getTime();
    var frameRate = 40;
    var step = (0 - curr) * (frameRate / duration);
    var stepFn = function () {
      var dest = curr + step;
      var timeElapsed = ((new Date()).getTime() - stamp) >= duration;
      var pastDest = dest <= 0;
      if (timeElapsed || pastDest) {
        setOpacity(0);
        callback();
      } else {
        setOpacity(dest);
        curr = dest;
        setTimeout(stepFn, frameRate);
      }
    }
    stepFn();
  }


  /* ChromeFrame helper utility */
  var CF = {
    isIE: function () {
      return (window.attachEvent && navigator.userAgent.indexOf('Opera') === -1);
    },


    isAvailable: function () {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("chromeframe") >= 0) { return true; }

      if (typeof window['ActiveXObject'] != 'undefined') {
        try {
          var obj = new ActiveXObject('ChromeTab.ChromeFrame');
          if (obj) {
            obj.registerBhoIfNeeded();
            return true;
          }
        } catch(e) {
        }
      }
      return false;
    },


    onDetect: function (callback) {
      var pollCF = function() {
        if (CF.isAvailable()) {
          setTimeout(callback, 500);
        } else {
          setTimeout(pollCF, 500);
        }
      }
      pollCF();
    }
  }


  var makeBookFrame = function (readingURL) {
    var bookFrame = document.createElement('iframe');
    bookFrame.src = readingURL;
    bookFrame.setAttribute('frameBorder', '0');
    bookFrame.setAttribute('scrolling', 'no');
    bookFrame.className = 'bkshSampleBookFrame';
    fullSizeElement(bookFrame);
    return bookFrame;
  }


  var makeBookObject = function (readingURL) {
    var spawner = document.createElement('span');
    spawner.innerHTML = [
      '<object codeBase="//www.google.com"',
        "type='application/chromeframe'",
        'classid="CLSID:E0A900DF-9611-4446-86BD-4B1D47E7DB2A"></object>'
    ].join(' ');
    var bookObject = spawner.firstChild;
    bookObject.src = readingURL;
    fullSizeElement(bookObject);
    return bookObject;
  }


  var bookBg = function (elem) {
    elem.style.background = 'rgb('+p.data.cover_color.join(',')+')';
  }


  var prepareBookFrame = function () {
    var bookFrame;
    if (CF.isIE()) {
      if (CF.isAvailable()) {
        bookFrame = makeBookObject(p.data.url);
      } else {
        bookFrame = makeBookFrame(p.data.url);
        CF.onDetect(function () {
          p.target.removeChild(bookFrame);
          bookFrame = makeBookObject(p.data.url);
          p.target.appendChild(bookFrame);
          bookBg(bookFrame);
        });
      }
    } else {
      bookFrame = makeBookFrame(p.data.url);
    }
    p.target.insertBefore(bookFrame, p.cover);
    bookBg(bookFrame);
  }


  var openTheBook = function () {
    // Always open full-screen on mobile.
    if (screen.width <= 320) {
      return Bookish.bustOut(p.target);
    }

    // Prepend the book-frame to the target, so that the cover obscures it.
    prepareBookFrame();

    // Hide the cover.
    p.cover.removeChild(p.veneer);
    fade(p.cover, p.options.fadeDuration || 1500, function () {
      p.cover.parentNode.removeChild(p.cover);
    });

    // Invoke the callback, if supplied.
    if (typeof p.options.onOpen == 'function') {
      p.options.onOpen();
    }
  }



  var initialise = function () {
    // Prepare the target.
    p.target.innerHTML = '';
    p.target.setAttribute('data-bookish-src', p.data.url);
    forcePosition(p.target);

    // Vary dimensions of the target according to cover sizes.
    var width = p.data.cover_dimensions[0];
    var height = p.data.cover_dimensions[1];
    if (p.options.varyDimension == 'width') {
      p.target.style.width = width * (p.target.offsetHeight / height)+'px';
    } else if (p.options.varyDimension == 'height') {
      p.target.style.height = (height * (p.target.offsetWidth / width))+'px';
    }

    // Append the COVER element.
    p.cover = document.createElement('div');
    p.cover.className = 'bkshSampleCover';
    p.target.appendChild(p.cover);
    fullSizeElement(p.cover);

    // Append the COVER IMAGE to the cover element.
    p.coverImage = document.createElement('img');
    p.coverImage.className = 'bkshSampleCoverImage';
    p.coverImage.src = p.data.cover_url;
    p.cover.appendChild(p.coverImage);
    fullSizeElement(p.coverImage);

    // Append the VENEER to the cover element.
    p.veneer = document.createElement('div');
    p.veneer.className = 'bkshSampleCoverVeneer';
    if (p.options.styleElements != false) {
      p.veneer.style.backgroundImage =
        'url(https://booki.sh/images/identity/play-button-200.png)';
      p.veneer.style.backgroundPosition = '50% 50%';
      p.veneer.style.backgroundRepeat = 'no-repeat';
      p.veneer.style.cursor = 'pointer';
      p.veneer.style.cssText += 'background-color: rgba(0,0,0,0.1);';
      if (screen.width <= 320) {
        p.veneer.style.cssText += 'background-size: 100px;';
      }
    }
    p.cover.appendChild(p.veneer);
    fullSizeElement(p.veneer);

    // Append the TITLEBAR to the veneer element, unless disabled.
    if (p.options.titlebar != false) {
      p.titlebar = document.createElement('div');
      p.titlebar.innerHTML = p.data.title;
      p.titlebar.className = 'bkshSampleTitle';
      p.veneer.appendChild(p.titlebar);
      if (p.options.styleElements != false) {
        p.titlebar.style.position = 'absolute';
        p.titlebar.style.top = 0;
        p.titlebar.style.right = 0;
        p.titlebar.style.left = 0;
        p.titlebar.style.height = '40px';
        p.titlebar.style.color = 'white';
        p.titlebar.style.background = '#555';
        p.titlebar.style.fontFamily = 'Helvetica, Arial, sans-serif';
        p.titlebar.style.fontSize = '12pt';
        p.titlebar.style.lineHeight = '45px';
        p.titlebar.style.padding = '5px 10px';
        p.titlebar.style.textAlign = 'left';
        p.titlebar.style.cssText +=
          'background: rgba(80,90,105,0.7);'+
          'text-overflow: ellipsis;'+
          'text-shadow: 1px 1px 1px #000;';
      }
    }

    // Listen for veneer click.
    p.veneer.onclick = openTheBook;

    // Keep track of page turns.
    Bookish.listenForPlaces();
  }


  initialise();
}


Bookish.bustOut = function (target) {
  if (typeof target == 'string') {
    target = document.getElementById(target);
  }
  var url = target.getAttribute('data-bookish-src');
  var book = Bookish.books.find('url', url);
  if (book && book.place) {
    url += '#'+book.place;
  }
  top.location.href = url;
}


Bookish.listenForPlaces = function () {
  if (window.addEventListener && !Bookish.trackPlace.listening) {
    window.addEventListener('message', Bookish.trackPlace, false);
    Bookish.trackPlace.listening = true;
  }
}


Bookish.trackPlace = function (evt) {
  var book = Bookish.books.find('url', function (v) {
    return v.substring(0, evt.origin.length) == evt.origin;
  });
  var match = evt.data.match(/^place:(.*)$/);
  if (match) {
    book.place = match[1];
  }
}


