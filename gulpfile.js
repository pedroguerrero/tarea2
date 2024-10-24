var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', async function () {
  return gulp
    .src('./app/scss/**/*.scss') // Gets all files ending with .scss in source
    .pipe(sass().on('error', sass.logError)) // Compiles Sass to CSS
    .pipe(gulp.dest('./app/css')); // Outputs the compiled CSS to the destination
});

gulp.task('watch', async function () {
  gulp.watch('./app/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
