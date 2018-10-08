var gulp = require('gulp');
var gulpless = require('gulp-less');
var mincss = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect');


var obj = {
	htmls:'./src/html/*.html',
	less:'./src/less/*.less',
	script:'./src/js/*.js',
	html:'./dist/html/',
	css:'./dist/css/',
	js:'./dist/js/',
}

// 定义开发阶段编译lee的文件任务
gulp.task('dev-less',function(){
	gulp.src(obj.less)
		.pipe(gulpless())
		.pipe(gulp.dest('./src/css/'))
		.pipe(connect.reload())
});
gulp.task('dev-html',function(){
	gulp.src(obj.htmls)
		.pipe(connect.reload())
});
gulp.task('dev-js',function(){
	gulp.src(obj.script)
		.pipe(connect.reload())
});




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


// 监视开发阶段资源文件的改变
gulp.task('dev-watch',function(){
	gulp.watch([obj.htmls],['dev-html']);
	gulp.watch([obj.less],['dev-less']);
	gulp.watch([obj.script],['dev-js']);
});

// 监视资源文件的改变
gulp.task('watch',function(){
	gulp.watch([obj.htmls],['html']);
	gulp.watch([obj.less],['less']);
	gulp.watch([obj.script],['script']);
});

// 开发阶段开启服务器任务
gulp.task('dev-server',function(){
	connect.server({
		root: 'src',
		port: 8080,
		livereload: true,
		index: './html/index.html'
	});
});

// 开启服务器的任务
gulp.task('serve',function(){
	connect.server({
		root: 'dist',
		port: 8080,
		livereload: true,
		index: './html/index.html'
	});
});



// 自定义开发任务
gulp.task('default',['dev-server','dev-watch']);


// 产品阶段任务
gulp.task('product',['serve','watch']);



















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