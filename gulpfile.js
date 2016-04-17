// Include gulp.
var gulp = require('gulp');

// Include plugins.
var sassLint = require('gulp-sass-lint');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

// SCSS Linting.
gulp.task('scss-lint', function() {
  return gulp.src(['./_sass/*.scss', './css/main.scss'])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

// JS Linting.
gulp.task('js-lint', function() {
  return gulp.src('./js/creative.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compress images.
gulp.task('images', function () {
  return gulp.src('./img/**/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./img/'));
});

// Default Task
gulp.task('default', ['js-lint', 'scss-lint']);
