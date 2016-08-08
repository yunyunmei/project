//引进gulp
var gulp = require('gulp');
//编译sass
var compass = require('gulp-compass');
//压缩css
var mincss = require('gulp-minify-css');
//文件名加MD5后缀
var rev = require('gulp-rev');
//路径替换
var revCollector = require('gulp-rev-collector');
//压缩html
var minifyHTML   = require('gulp-minify-html');
//处理浏览器前缀
var autoprefixer=require('gulp-autoprefixer');

gulp.task('css',function () {
    gulp.src('sass/*.scss')
        //编译sass
        .pipe(compass({
            config_file:'config.rb',
            css:'export/css/',
            sass:'sass/'
        }))
//    处理浏览器前缀
        .pipe(autoprefixer({
            browsers:['last 4 versions'],
            cascade:false
        }))
        //压缩css
        .pipe(mincss())
//    文件名加MD5后缀
        .pipe(rev())
        //输出到文件夹
        .pipe(gulp.dest('export/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('export/rev/css'));
});
//替换
gulp.task('rev', function () {
    return gulp.src(['export/rev/css/*.json', '*.html'])
        .pipe( revCollector({
            replaceReved: true,
        }))
        .pipe( minifyHTML({
            empty:true,
            spare:true
        }) )
        .pipe( gulp.dest('export'));
});
//监控
gulp.task('watchcs',function(){
    gulp.watch('sass/*.scss',['css'])
});
gulp.task('watchrev',function(){
    gulp.watch('export/rev/css/*.json',['rev'])
});
gulp.task('default',['watchcs','watchrev'] ,function() {
});