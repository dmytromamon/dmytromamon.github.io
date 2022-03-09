const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const pug = require('gulp-pug');
const webpack = require('webpack-stream');

const fs = require('fs');

function fileExist(filepath) {
    let flag = true;
    try {
        fs.accessSync(filepath, fs.F_OK);
    } catch (e) {
        flag = false;
    }
    return flag;
}

let doNotEditMsg = '\r\n//-    Warning! This file generated automatically.\r\n//-    Do not change anything without compilation.\r\n//-    All changes will be lost.\r\n\r\n';

function getDirectories(ext) {
    if (ext === 'jsPartials') {
        let folders = fs.readdirSync('./src/components/')
            .filter(item => fs.lstatSync('./src/components/' + item).isDirectory());
      
        let res = [];
        let final = [];
      
        folders.forEach(function(folderName){
          let results = fs.readdirSync(`./src/components/${folderName}/`)
              .filter(function(elm){
                return  elm.match(/.*\.(sass)/ig)
              })
          res.push({
            folder: folderName + '/',
            name: results
          });
        });
      
        for (var i = 0; i < folders.length; i++) {
          res[i]['name'].forEach(function(fileName){
            final.push('components/' + res[i]['folder'] + fileName)
          })
        }

        return final;
    }

    if (ext === 'sassPartials') {
        let folders = fs.readdirSync('./src/sass/')
            .filter(item => fs.lstatSync('./src/sass/' + item).isDirectory());
      
        let res = [];
        let final = [];
      
        folders.forEach(function(folderName){
          let results = fs.readdirSync(`./src/sass/${folderName}/`)
              .filter(function(elm){
                return  elm.match(/.*\.(sass|scss)/ig);
              })
          res.push({
            folder: folderName + '/',
            name: results
          });
        });
            
      
        for (var i = 0; i < folders.length; i++) {
          if (res[i]['folder'] == '_utils/') {
            res[i]['name'].forEach(function(fileName){
              final.push(res[i]['folder'] + fileName);
            })
          }
        }
      
        for (var i = 0; i < folders.length; i++) {
          if (res[i]['folder'] !== '_utils/') {
            res[i]['name'].forEach(function(fileName){
              final.push(res[i]['folder'] + fileName);
            })
          }
        }
      
        return final;
    }
}


//*** HTML ***//

gulp.task('pug', function () {
  return gulp.src('./src/**/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('./build'));
});

//*** HTML ***//


//*** SASS ***//

gulp.task('writeSassMixinsFile', function (cb) {
  let sassMixins = '//-' + doNotEditMsg;
  let folders = fs.readdirSync('./src/sass/')
      .filter(item => fs.lstatSync('./src/sass/' + item).isDirectory());
  
  let allPartialsWithSassFiles = getDirectories('sassPartials');
  allPartialsWithSassFiles.forEach(function(blockName){
    sassMixins += `@import "../src/sass/${blockName}"\r\n`;
  });
  
  let allComponentsWithSassFiles = getDirectories('jsPartials');
  allComponentsWithSassFiles.forEach(function (blockName) {
    sassMixins += `@import "../src/${blockName}"\r\n`;
  });
  
  fs.writeFileSync(`./_blocks/_all-blocks.sass`, sassMixins);
  cb();
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
});

gulp.task('autoprefixer', gulp.series('writeSassMixinsFile', 'sass'), function () {
  return gulp.src('./src/css/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 3 version', '> 5%'],
      cascade: false
    }))
    .pipe(gulp.dest('./src'))
});

gulp.task('minify-css', function () {
  return gulp.src('./src/css/**/*.css')
    .pipe(rename({
      basename: 'index',
      suffix: '.min'
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/css'))
});

//*** SASS ***//

//*** Scripts ***//

gulp.task('js', function () {
  return gulp.src('./src/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build'))
});

//*** Scripts ***//

//*** WATCH ***//

gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

// Starts a BrowerSync instance
gulp.task('live', function () {
  browserSync.init({
    server: 'build',
    open: false,
    watchOptions: {
      notify: false,
      awaitWriteFinish: true
    }
  });

  gulp.watch("./src/**/*.sass", gulp.series('autoprefixer', 'minify-css', 'reload'));
  gulp.watch("./src/**/*.pug", gulp.series('pug', 'reload'));
  gulp.watch("./src/**/*.js", gulp.series('js', 'reload'));
});

gulp.task('watch', gulp.series('autoprefixer', 'minify-css', 'pug', 'js', 'live'), function () {});

gulp.task('build', gulp.series('autoprefixer', 'minify-css', 'pug', 'js'), function () {});

//*** WATCH ***//