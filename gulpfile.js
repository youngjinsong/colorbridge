/**
 * Client source task manager with BrowserSync
 *
 * @author dodortus (dodortus@gmail.com)
 * @fileOverview 클라이언트 정적파일 빌드 및 변경 감지 매니저
 * @Git https://github.com/dodortus/gulp-browser-sync
 */
const gulp = require('gulp');
const concat = require('gulp-concat'); // 파일 합치기
const uglify = require('gulp-uglify'); // JS 난독화
const scss = require('gulp-sass'); // SCSS
const sourcemaps = require('gulp-sourcemaps'); // 컴파일된 CSS소스의 SCSS 위치 매핑
const minifyCSS = require('gulp-clean-css'); // CSS 압축
const autoprefixer = require('gulp-autoprefixer'); // CSS prefix 삽입
const imagemin = require('gulp-imagemin'); // 이미지 압축
const browserSync = require('browser-sync').create(); // browser-sync 호출
const inject = require('gulp-inject'); // HTML injection (개발환경 / 배포환경 소스 호출 분기)
const clean = require('gulp-clean'); // 배포시 이전 파일, 폴더 삭제
const runSequence = require('run-sequence'); // 배포시 동기 수행
const changed = require('gulp-changed'); // 배포시 변경된 파일만 빌드
const rename = require('gulp-rename'); // 파일명 rename
const paths = require('./gulpfile.paths.js')(); // 경로 설정 모듈
const header = require('gulp-header'); // 배포시 inject header
const pkg = require('./package.json'); // using data from package.json
const comment = [
  '/**',
  ' * ColorBridge',
  ' * @author ssongki (ssongki@gmail.com)',
  ' * @version v<%= pkg.version %>',
  ' * @homepage <%= pkg.homepage %>',
  ' */',
  '',
].join('\n');

// SCSS config (REF: http://webclub.tistory.com/470)
const scssOpts = {
  outputStyle: 'expanded',
  indentWidth: 1,
  indentType: 'tab',
};

/**
 * HTML 변화를 감지하고 갱신한다.
 */
gulp.task('html', function() {
  return (
    gulp
      .src(paths.watch.html)
      // 변경된 파일을 browserSync를 통해 브라우저에 반영
      .pipe(browserSync.reload({ stream: true }))
  );
});

/**
 * JS 변화를 감지하고 갱신한다.
 */
gulp.task('js', function() {
  return (
    gulp
      .src(paths.watch.js)
      // 변경된 파일을 browserSync를 통해 브라우저에 반영
      .pipe(browserSync.reload({ stream: true }))
  );
});

/**
 * scss 파일을 css 로 컴파일한다.
 */
gulp.task('scss', function() {
  return (
    gulp
      .src(paths.watch.scss.main)
      // 소스맵 초기화(소스맵을 생성)
      .pipe(sourcemaps.init())

      // SCSS 작성시 watch 가 멈추지 않도록 logError 를 설정
      .pipe(scss(scssOpts).on('error', scss.logError))

      // 위에서 생성한 소스맵을 사용한다.
      .pipe(sourcemaps.write('.'))

      // CSS 파일이 생성될 목적지 설정
      .pipe(gulp.dest(paths.watch.scss.result))

      // 변경된 파일을 browserSync를 통해 브라우저에 반영
      .pipe(browserSync.reload({ stream: true }))
  );
});

/**
 * 배포: 브랜드 JS
 */
gulp.task('build-js', function() {
  return gulp
    .src(paths.build.js) // 개별 우선순위 설정 gulp.src([file1.js', file2.js'])
    .pipe(concat('main.bundle.js')) // 소스머지
    .pipe(
      uglify({
        // 난독화
        output: {
          //comments: /^!/
        },
        compress: {
          drop_console: true,
        },
      })
    )
    .pipe(header(comment, { pkg: pkg }))
    .pipe(gulp.dest(paths.build.root + '/contents/js')); // build 디렉토리에 파일 생성
});

/**
 * 배포: CSS
 */
gulp.task('build-css', ['scss'], function() {
  return (
    gulp
      .src(paths.build.css)
      // REF: https://github.com/browserslist/browserslist
      .pipe(autoprefixer(['last 4 versions', '> 5%', 'not dead']))
      // .pipe(concat('all.css'))                    // 소스머지
      .pipe(minifyCSS({ keepBreaks: true })) // 최소화
      .pipe(rename('main.bundle.css')) // 파일명 변경
      .pipe(gulp.dest(paths.build.root + '/contents/css'))
  ); // build 디렉토리에 파일 생성
});

/**
 * 배포: 이미지
 */
gulp.task('build-img', function() {
  return gulp
    .src(paths.build.img)
    .pipe(changed(paths.build.root + '/contents/img'))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.build.root + '/contents/img'));
});

/**
 * 배포 환경의 소스로 index 파일을 생성한다.
 * 브랜드
 */
gulp.task('build-html', function() {
  const target = gulp.src(paths.build.html.main);
  const sources = gulp.src(
    [paths.build.root + '/contents/css/main.bundle.css', paths.build.root + '/contents/js/main.bundle.js'],
    { read: false }
  );

  return target
    .pipe(
      inject(sources, {
        ignorePath: '/build/',
        addRootSlash: false,
        // Insert version
        transform: function(filePath) {
          filePath = `${filePath}?v=${pkg.version}`;
          return inject.transform.apply(inject.transform, arguments);
        },
      })
    )
    .pipe(gulp.dest(paths.build.root));
});

/**
 * 배포 환경의 소스로 html 파일을 생성한다.
 * 브랜드 서브
 */
gulp.task('build-sub-html', function() {
  const target = gulp.src(paths.build.html.partial);
  return target.pipe(gulp.dest(paths.build.root + '/views'));
});

/**
 * 배포: 기존 폴더 제거
 */
gulp.task('build-clean', function() {
  return gulp
    .src([`${paths.build.root}/contents/css`, `${paths.build.root}/contents/img`, `${paths.build.root}/contents/js`], {
      read: false,
    })
    .pipe(clean());
});

/**
 * 브라우저 싱크 서버 초기화
 */
gulp.task('browserSync', ['html', 'js', 'scss'], function() {
  return browserSync.init({
    //proxy: "localhost:8080"   // 다른 개발 서버와 연동하여 브라우저 싱크 사용시 프록시를 통해 사용 가능하다.
    port: 8001,
    server: {
      // baseDir: paths.build.root
      baseDir: paths.srcDir,
    },
  });
});

/**
 * 파일 변경 감지
 */
gulp.task('watch', function() {
  gulp.watch(paths.watch.html, ['html']);
  gulp.watch(paths.watch.js, ['js']);
  gulp.watch(paths.watch.scss.all, ['scss']);
});

/**
 * 배포 소스 빌드
 * 동기로 실행하기 위해 runSequence()로 순차적 수행
 */
gulp.task('build-all', function() {
  runSequence('build-clean', ['build-js', 'build-css', 'build-img'], 'build-html', 'build-sub-html');
});

/**
 * 배포 소스 빌드 (이미지제외 - 코드만)
 */
gulp.task('build-only-code', function() {
  runSequence(['build-js', 'build-css'], 'build-html', 'build-sub-html');
});

/**
 * 기본 개발용 task 실행
 */
gulp.task('default', ['browserSync', 'watch']);
