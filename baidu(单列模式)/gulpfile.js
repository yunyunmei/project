//引进gulp
var gulp = require('gulp');
//编译sass
var compass = require('gulp-compass');
//压缩css
var mincss = require('gulp-minify-css');
//压缩js
var uglify = require('gulp-uglify');
//文件名加MD5后缀
var rev = require('gulp-rev');
//路径替换
var revCollector = require('gulp-rev-collector');
//压缩html
var minifyhtml   = require('gulp-minify-html');
//文件合并
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin'),//图片压缩
    pngcrush = require('imagemin-pngcrush');
var  rename = require('gulp-rename');//文件更名
var notify = require('gulp-notify');//提示信息
var autoprefixer = require('gulp-autoprefixer'); //处理浏览器前缀
//压缩html
gulp.task('html', function() {
    return gulp.src('src/baidu.html')
        .pipe(minifyhtml({collapseWhitespace: true}))
        .pipe(gulp.dest('./export/'))
        .pipe(notify({ message: 'html task ok' }));
});
//压缩图片
gulp.task('img', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('./export/images/'))
        .pipe(notify({ message: 'img task ok' }));
});
// 合并、压缩、重命名css
gulp.task('css',function () {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer({ //处理浏览器前缀
            browsers: ['last 4 versions'],
            cascade: false
        }))
        // .pipe(concat('baidu.css')) //合并所有CSS到baidu.css
        // .pipe(mincss()) //压缩CSS
        // .pipe(rev()) //- 文件名加MD5后缀
        // .pipe(rename({
        //     suffix: '.min'
        // })) //重名名
        // .pipe(gulp.dest('./export/css')) //输出到文件夹
        // .pipe(rev.manifest())
        // .pipe(gulp.dest('./export/rev/css'))
        //编译sass
        // .pipe(compass({
        //     config_file:'./config.rb',
        //     css:'./export/css/',
        //     sass:'./src/sass/'
        // }))
        //压缩css
        // .pipe(mincss())
        //    文件名加MD5后缀
        // .pipe(rev())
        //输出到文件夹
        .pipe(gulp.dest('export/css'))
        .pipe(rev.manifest())//- 生成一个rev-manifest.json
        .pipe(gulp.dest('export/rev/css'))
        .pipe(notify({ message: 'css task ok' }));
});
//压缩JS
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        // .pipe(concat('main.js')) //合并所有js到main.js
        // .pipe(uglify()) //压缩
        // .pipe(rev()) //- 文件名加MD5后缀
        .pipe(gulp.dest('export/js'))//输出到文件夹
        .pipe(rev.manifest())//- 生成一个rev-manifest.json
        .pipe( gulp.dest('export/rev/js'))
        .pipe(notify({ message: 'js task ok' }));
});
//替换
gulp.task('rev', function () {
    gulp.src(['export/rev/**/*.json', 'src/*.html'])
        .pipe( revCollector({
            replaceReved: true,
        }))
        .pipe( minifyhtml({
            empty:true,
            spare:true
        }) )
        .pipe( gulp.dest('export'));
});

//监控
gulp.task('watchhtml',function () {
    gulp.watch('src/baidu.html',['html'])
});
gulp.task('watchcs',function(){
    gulp.watch('src/css/*.css',['css'])
});
gulp.task('watchjs', function() {
    gulp.watch('src/js/*.js', ['js'])
});
gulp.task('watchimg',function(){
    gulp.watch('src/images/*',['img'])
});
gulp.task('watchrev',function(){
    gulp.watch('export/rev//***.json',['rev'])
});
gulp.task('default',['watchhtml','watchcs','watchimg','watchjs','watchrev'] ,function() {
});

