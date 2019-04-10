var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var merge = require('merge-stream');

//*** MINIFY ***//

gulp.task('useref', function () {
  return gulp.src('development/*.html')
    .pipe(gulp.dest('production'))
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('production'));
});

//*** MINIFY ***//

//*** CSS ***//

gulp.task('sass', function () {
  return gulp.src('development/sass/**/*.sass', {
      sourcemap: true
    })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'normal',
      sourceMap: false,
      errLogToConsole: true,
      indentedSyntax: true
    }))
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: '/development/sass'
    }))
    .pipe(gulp.dest('development/css'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));
});

gulp.task('autoprefixer', function () {
  return gulp.src('development/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 3 version', '> 5%'],
      cascade: false
    }))
    .pipe(gulp.dest('development/css'))
});

gulp.task('minify-css', function () {
  return gulp.src('development/**/*.css')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('production'));
});

gulp.task('sass-watch', ['sass', 'autoprefixer', 'minify-css', 'useref'], function (done) {
  browserSync.stream({once: true});
  done();
});

//*** CSS ***//

//*** HTML ***//

gulp.task('html', function () {
  return gulp.src('development/*.html')
    .pipe(gulp.dest('production'))
});

gulp.task('html-watch', ['html', 'useref'], function (done) {
  browserSync.reload();
  done();
});

//*** HTML ***//

//*** FONTS ***//

gulp.task('fonts', function () {
  return gulp.src('development/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)')
    .pipe(gulp.dest('production/fonts'))
});

gulp.task('fonts-watch', ['fonts'], function (done) {
  browserSync.reload();
  done();
});

//*** FONTS ***//

//*** SCRIPTS AND LIBS ***//

gulp.task('script', function () {
  return gulp.src([
        'development/js/*.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('production/js'))
});

gulp.task('libs', function () {
  return gulp.src([
        'development/libs/*.js'
    ])
    .pipe(gulp.dest('production/libs'))
});

gulp.task('script-watch', ['script', 'libs', 'useref'], function (done) {
  browserSync.reload();
  done();
});

//*** SCRIPTS AND LIBS ***//

//*** IMAGES ***//

gulp.task('images', function () {
  return gulp.src('development/img/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('production/img'))
});

gulp.task('images-watch', ['images'], function (done) {
  browserSync.reload();
  done();
});

//*** IMAGES ***//

//*** WATCH ***//

gulp.task('watch', ['sass'], function () {
  browserSync.init({
    server: 'production',
    watchOptions: {
      awaitWriteFinish: true
    }
  });

  gulp.watch("development/sass/**/*.sass", ['sass-watch']);
  gulp.watch("development/**/*.html", ['html-watch']);
  gulp.watch("development/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)", ['fonts-watch']);
  gulp.watch("development/js/**/*.js", ['script-watch']);
  gulp.watch("development/libs/**/*.js", ['script-watch']);
  gulp.watch("development/img/**/*.+(png|jpg|jpeg|gif|svg)", ['images-watch']);
});

//*** WATCH ***//

//*** CLEAR ***//

gulp.task('clear-production', function () {
  var clearCSS = del('production/css/**/**', {force:true});
  var clearFonts = del('production/fonts/**/**', {force:true});
  var clearImages = del('production/img/**/**', {force:true});
  var clearJS = del('production/js/**/**', {force:true});
  var clearLibs = del('production/libs/**/**', {force:true});
  var clearVideos = del('production/videos/**/**', {force:true});
  var clearHTML = del('production/*.html', {force:true});
  return merge(clearCSS, clearFonts, clearImages, clearJS, clearLibs, clearVideos, clearHTML);
})

//*** CLEAR ***//