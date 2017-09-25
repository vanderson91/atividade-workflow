var gulp = require('gulp');
var mcss = require('gulp-mcss');
var scss = require('gulp-scss');
var htmlmin = require('gulp-html-minifier2');
var del = require('del');

gulp.task("clean-css", function(){
    del('./dist/css');
});

gulp.task('compila-scss', ["clean-css"], function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(scss(
            {"bundleExec": false}
        ))
    .pipe(mcss())
	.pipe(gulp.dest('./dist/css/'))
});

gulp.task("clean-html", function(){
    del('./dist/*.html');
});

gulp.task('mimifica-html', ["clean-html"], function(){
	return gulp.src('./source/index.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./dist/'))
});


gulp.task('default', function(){
    gulp.watch('./source/scss/*', ['compila-scss']);
    gulp.watch('./source/index.html', ['mimifica-html']);
});
