module.exports = function() {

  // source path
  const srcDir = './src';
  const contentsDir = srcDir + '/contents';
  const watch = {
    js: [
      contentsDir + '/js/*.js'
    ],
    scss: {
      main: contentsDir + '/css/scss/*.scss',
      all: contentsDir + '/css/scss/**/*.scss',
      result: contentsDir + '/css'
    },
    img: contentsDir + '/img/*',
    html: [
      srcDir + '/*.html',
      srcDir + '/views/**/*.html'
    ]
  };

  // build path
  const build = {
    root: './build',
    js: [
      contentsDir + '/js/lib/*.js',
      contentsDir + '/js/modules/*.js',
      contentsDir + '/js/pages/*/*.js',
      contentsDir + '/js/pages/*.js',
      contentsDir + '/js/*.js'
    ],
    css: contentsDir + '/css/*.css',
    img: contentsDir + '/img/**',
    html: {
      main: srcDir + '/index.html',
      partial: srcDir + '/views/**/*.html'
    }
  };

  return {
    srcDir: srcDir,
    watch: watch,
    build: build
  }
};