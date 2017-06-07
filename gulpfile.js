var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cssMin = require('gulp-css');

gulp.task('script',function(){
    return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});
// 压缩js代码

gulp.task('css',function(){
    return gulp.src('src/css/**/*.css')
    .pipe(autoprefixer({  //兼容性浏览器前缀添加
        browsers:['last 40 versions'],
        cascade:false
    }))
    .pipe(cssMin()) //压缩css代码
    .pipe(gulp.dest('./dist'));
});

gulp.task('default',['script','css'],function(){
    console.log('任务完成');
})