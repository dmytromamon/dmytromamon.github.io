const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      browserSync = require('browser-sync'),
      useref = require('gulp-useref'),
      uglify = require('gulp-uglify'),
      gulpIf = require('gulp-if'),
      cssnano = require('gulp-cssnano'),
      imagemin = require('gulp-imagemin'),
      cache = require('gulp-cache'),
      del = require('del'),
      concat = require('gulp-concat'),
      runSequence = require('run-sequence'),
      cleanCSS = require('gulp-clean-css'),
      rename = require("gulp-rename");

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.sass') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

gulp.task('autoprefixer', function() {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 3 version', '> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css'))
});

gulp.task('minify-css', () => {
  return gulp.src('src/**/*.css')
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app'));
});

gulp.task('useref', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('app'))
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('app'));
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('app/img'))
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)')
    .pipe(gulp.dest('app/fonts'))
})

gulp.task('clean', function() {
  return del.sync('app').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:app', function() {
  return del.sync(['app/**/*', '!app/images', '!app/images/**/*']);
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:app',
    'sass',
    ['useref', 'images', 'fonts'],
    callback
  )
})

gulp.task('script', function() {
    return gulp.src([
        'src/js/*.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('libs', function() {
    return gulp.src([
        'src/libs/*.js'
    ])
    .pipe(gulp.dest('app/libs'))
});

// Watch
gulp.task('watch', ['sass', 'autoprefixer', 'fonts', 'useref', 'images', 'script', 'browser-sync', 'libs', 'minify-css'], function() {
  gulp.watch('src/sass/**/*.sass', ['sass']);
  gulp.watch('src/css/**/*.css', ['autoprefixer', 'minify-css']);
  gulp.watch('src/*.html', ['useref']);
  gulp.watch('src/js/**/*.js', ['script']);
  gulp.watch('src/libs/**/*.js', ['libs']);
  gulp.watch('src/img/**/*.+(png|jpg|jpeg|gif|svg)', ['images']);
  gulp.watch('src/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)', ['fonts']);
  gulp.watch('src/sass/**/*.sass', browserSync.reload);
  gulp.watch('src/css/**/*.css', browserSync.reload);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/libs/**/*.js', browserSync.reload);
  gulp.watch('src/img/**/*.+(png|jpg|jpeg|gif|svg)', browserSync.reload);
  gulp.watch('src/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)', browserSync.reload);
})