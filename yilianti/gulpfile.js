var gulp = require('gulp');
var gulpless = require('gulp-less');
var mincss = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect');


var obj = {
	htmls:'./src/htmls/*.html',
	less:'./src/less/*.less',
	script:'./src/jst/*.js',
	html:'./dist/html/',
	css:'./dist/css/',
	js:'./dist/js/',
}
// 定义编译lee的文件任务
gulp.task('less',function(){
	gulp.src(obj.less)
		.pipe(gulpless())
		.pipe(mincss())
		.pipe(gulp.dest(obj.css))
		.pipe(connect.reload())
});
// 定义压缩并转义js的文件任务
gulp.task('script',function(){
	gulp.src(obj.script)
		.pipe(uglify())
		.pipe(gulp.dest(obj.js))
		.pipe(connect.reload())
});
// 定义压缩html的文件任务
gulp.task('html',function(){
	gulp.src(obj.htmls)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(obj.html))
		.pipe(connect.reload())
});
// 监视资源文件的改变
gulp.task('watch',function(){
	gulp.watch([obj.htmls],['html']);
	gulp.watch([obj.less],['less']);
	gulp.watch([obj.script],['script']);
});

// 开启服务器的任务
gulp.task('serve',function(){
	connect.server({
		root: 'dist',
		port: 8080,
		livereload: true,
		index: './html/index.html',
	});
});

// 自定义任务
gulp.task('default',['serve','watch']);




















// 定义任务
// gulp.task('task1',function(){
// 	console.log('哇咔咔1');
// });

// 定义任务
// gulp.task('task2',['task1'],function(){
// 	console.log('哇咔咔2');
// });

// 定义任务
// gulp.task('task3',['task1','task2'],function(){
// 	console.log('哇咔咔3');
// });