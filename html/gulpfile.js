const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Компиляция SCSS в CSS
gulp.task('sass', function(done) {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/css'))
    .on('end', done); // Сигнализируем о завершении задачи
});

// Отслеживание изменений в SCSS файлах
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

// Задача по умолчанию
gulp.task('default', gulp.series('sass', 'watch'));