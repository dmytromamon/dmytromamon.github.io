var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var concat = require('gulp-concat');

//*** HTML ***//

gulp.task('html', function () {
  return gulp.src('development/*.html')
    .pipe(gulp.dest('production'))
});

gulp.task('useref', ['html'], function () {
  return gulp.src('development/*.html')
    .pipe(gulp.dest('production'))
    .pipe(useref())
});

//*** HTML ***//

//*** CSS ***//

gulp.task('sass', function() {
  return gulp.src('development/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('development/css'))
});

gulp.task('autoprefixer', ['sass'], function () {
  return gulp.src('development/css/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 3 version', '> 5%'],
      cascade: false
    }))
    .pipe(gulp.dest('development/css'))
});

gulp.task('minify-css', ['autoprefixer'], function () {
  return gulp.src('development/css/**/*.css')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('production/css')); 
});

//*** CSS ***//

//*** FONTS ***//

gulp.task('fonts', function () {
  return gulp.src('development/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)')
    .pipe(gulp.dest('production/fonts'))
});

//*** FONTS ***//

//*** IMAGES ***//

gulp.task('images', function () {
  return gulp.src('development/img/**/*.+(png|jpg|svg)')
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('production/img'))
});

//*** IMAGES ***//

//*** SCRIPTS AND LIBS ***//

gulp.task('script', function () {
  return gulp.src([
        'development/js/*.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('production/js'))
});

//*** SCRIPTS AND LIBS ***//

gulp.task('reload', ['useref', 'minify-css', 'fonts', 'images', 'script'], function (done) {
  browserSync.reload();
  done();
});
//*** WATCH ***//

gulp.task('watch', function () {
  browserSync.init({
    server: 'production',
    watchOptions: {
      awaitWriteFinish: true
    }
  });

  gulp.watch("development/**/*.+(html|sass|js|png|jpg|svg|otf|ttf|svg|eot|woff|woff2)", ['reload']);
});

//*** WATCH ***//