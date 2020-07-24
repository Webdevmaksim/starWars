const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass  = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

// Static server
function bs() {
    minсss();
    compress();
    // minify_h();
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./js/*.js").on('change', browserSync.reload);
    watch("./css/*.css").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./php/*.php").on('change', browserSync.reload);
};
function compress(){
    return src(['./js/*.js', '!./js/*.min.js'])
    .pipe(minify({
        ext:{
            min: '.min.js'
        },
        ignoreFiles: ['-min.js']
    }))
    .pipe(dest('js'));
};

function minify_h () {
    return src(['./*.html', '!./*.min.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./'));
};


// Task to minify css using package cleanCSs
    function minсss() {
     // Folder with files to minify
     return src(['./css/*.css', '!./css/*.min.css'])
     //The method pipe() allow you to chain multiple tasks together 
     //I execute the task to minify the files
     .pipe(rename({
        suffix: '.min'
    }))
    .pipe(cleanCSS())
    //I define the destination of the minified files with the method dest
    .pipe(dest('css'));
};

function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
            // overrideBrowsersList: ['last 20 versions']
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};



exports.serve = bs;