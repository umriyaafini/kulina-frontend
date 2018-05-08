var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})

gulp.task('sass', function(){
    return gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('assets/sass/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
});

gulp.task('default', ['sass','browserSync', 'watch']);