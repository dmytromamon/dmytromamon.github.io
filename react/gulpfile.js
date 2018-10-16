const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync'),
  useref = require('gulp-useref'),
  babel = require('gulp-babel'),
  gulpIf = require('gulp-if'),
  cssnano = require('gulp-cssnano'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  del = require('del'),
  concat = require('gulp-concat'),
  runSequence = require('run-sequence'),
  cleanCSS = require('gulp-clean-css'),
  rename = require("gulp-rename"),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  gutil = require('gutil'),
  source = require('vinyl-source-stream'),
  reload = browserSync.reload;

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'production'
    },
    notify: false
  });

  gulp.watch("production/css/**/*.css").on("change", reload);
  gulp.watch("production/*.html").on("change", reload);
  gulp.watch("production/js/**/*.js").on("change", reload);
  gulp.watch("production/libs/**/*.js").on("change", reload);
  gulp.watch("production/img/**/*.+(png|jpg|jpeg|gif|svg)").on("change", reload);
  gulp.watch("production/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)").on("change", reload);
});

gulp.task('sass', function () {
  return gulp.src('development/sass/**/*.sass') // Gets all files ending with .scss in production/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: notify.onError(error => `Error: ${error.message}`)
    }))
    .pipe(sass({
      outputStyle: 'normal',
      sourceMap: false,
      errLogToConsole: true,
      indentedSyntax: true
    })) // Passes it through a gulp-sass
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('development/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

gulp.task('autoprefixer', function () {
  return gulp.src('development/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 3 version', '> 5%'],
      cascade: false
    }))
    .pipe(gulp.dest('development/css'))
});

gulp.task('minify-css', () => {
  return gulp.src('development/**/*.css')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('production'));
});

gulp.task('useref', function () {
  return gulp.src('development/*.html')
    .pipe(gulp.dest('production'))
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('production'));
});

gulp.task('images', function () {
  return gulp.src('development/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('production/img'))
});

gulp.task('fonts', function () {
  return gulp.src('development/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)')
    .pipe(gulp.dest('production/fonts'))
})

gulp.task('clean', function () {
  return del.sync('production').then(function (cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:production', function () {
  return del.sync(['production/**/*', '!production/images', '!production/images/**/*']);
});

gulp.task('default', function (callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence(
    'clean:production',
    'sass', ['useref', 'images', 'fonts'],
    callback
  )
})

gulp.task('script', () => {
//  gulp.src('development/js/**/*.js')
//  .pipe(sourcemaps.init())
//  .pipe(babel())
//  .pipe(concat('app.min.js'))
//  .pipe(gulp.dest('production/js'))
          
        browserify({
            entries: 'development/js/index.js',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ["@babel/preset-env","@babel/preset-react"],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(err.message);
            this.emit('end');
        })
//        .pipe(concat('app.min.js'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('production/js'));
});

gulp.task('libs', function () {
  return gulp.src([
        'development/libs/*.js'
    ])
    .pipe(gulp.dest('production/libs'))
});

// Watch
gulp.task('watch', ['sass', 'autoprefixer', 'fonts', 'useref', 'images', 'script', 'browser-sync', 'libs', 'minify-css'], function () {
  gulp.watch('development/sass/**/*.sass', ['sass']);
  gulp.watch('development/css/**/*.css', ['autoprefixer', 'minify-css']);
  gulp.watch('development/*.html', ['useref']);
  gulp.watch('development/js/**/*.js', ['script']);
  gulp.watch('development/libs/**/*.js', ['libs']);
  gulp.watch('development/img/**/*.+(png|jpg|jpeg|gif|svg)', ['images']);
  gulp.watch('development/fonts/**/*.+(otf|ttf|svg|eot|woff|woff2)', ['fonts']);
})
