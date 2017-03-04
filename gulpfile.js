/**
 * Client source build manager
 *
 * @author dodortus (dodortus@gmail.com)
 * @fileOverview 클라이언트 정적파일 빌드 및 감지 메니저
 * @REF http://programmingsummaries.tistory.com/356
 */

// modules
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyCSS = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

// watch
const watch = require('gulp-watch');
const livereload = require('gulp-livereload');  // chrome livereload plugin 설치 필요.

// target directory
const src = 'contents/';   // source directory path
const dist = 'dist'; // result directory path
const paths = {
	js: src + '/js/*.js',
	css: src + '/css/*.css',
	img: src + '/img/*'
};

/**
 * 자바스크립트 파일을 하나로 합치고 압축한다.
 * 개별파일설정  gulp.src([file1.js', file2.js'])
 */
gulp.task('combine-js', function() {
	return gulp.src(paths.js)
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dist + '/js'))
		.pipe(livereload());
});

// CSS 압축
gulp.task('combine-css', function() {
  return gulp.src(paths.css)
    .pipe(concat('main.css'))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(dist + '/css'))
    .pipe(livereload());
});

// image 최적화 압축
gulp.task('combine-img', function() {
  return gulp.src(paths.img + '*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()],
    }))
    .pipe(gulp.dest(dist + '/img'));
});

// 파일 변경 감지
gulp.task('watch', function() {
  livereload.listen();

  watch(paths.css).on('change', livereload.changed);
	watch(paths.js).on('change', livereload.changed);
});

// 소스 압축
gulp.task('combine', ['combine-js', 'combine-css']);

// 기본 task 설정
gulp.task('default', ['watch']);
