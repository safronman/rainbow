var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var gcmq = require('gulp-group-css-media-queries');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var runSequence = require('run-sequence');
var del = require('del');


// - Добавление normalize
// - Добавление префиксов
// - Использование csscomb
// - Группировка медиафайлов
// - Минификация CSS
gulp.task('style', function () {
  return gulp.src("scss/style.scss")
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csscomb())
    .pipe(gcmq())
    .pipe(gulp.dest('css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});


// Минификация изображений png, jpg, gif, svg
gulp.task('imagemin', function () {
  return gulp.src('img/**/*')
    .pipe(imagemin([
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('img'));
});


// Создание SVG спрайтов
gulp.task('sprite', function() {
  return gulp.src('img/sprite/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('img'));
});


// Автообновление странице при изменении html и css файлов
gulp.task('serve', ['style'], function() {
  browserSync.init({
    server: "."
  });

  gulp.watch('scss/**/*.scss', ['style']);
  gulp.watch('*.html').on('change', browserSync.reload);
});






// // Сборка проекта
// gulp.task('build', function(callback) {
//   runSequence('style', 'imagemin', 'sprite', callback);
// });


// // Копируем все файлы в папку build
// gulp.task('copy', function() {
//   return gulp.src([
//     'fonts/**/*.{woff,woff2}',
//     'img/**',
//     'js/**',
//     '*.html'
//   ], {
//     base: "."
//   })
//   .pipe(gulp.dest('build'));
// });

// // Очищаем папку build
// gulp.task('clean', function() {
//   return del('build');
// });

