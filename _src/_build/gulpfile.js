// Gulp Config File


//
// VARIABLES
//

var gulp = require('gulp'),

    // Sass
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),

    // Javascript
    babel = require('gulp-babel');

    // Error handling, hmmmm.....
    // notify = require("gulp-notify"),
    // plumber = require('gulp-plumber'),

    // Live reload
    // livereload = require('gulp-livereload');


// Paths
var paths = {
    scripts: ['../data/*.js','../app.js'],
    styles: ['../styles/*.scss','../styles/*/*.scss']
};


//
// TASKS
//

// Task: Sass
gulp.task('sass', function () {

    // use the above file path variable to find sass
    gulp.src(paths.styles)

    .pipe(sass({style: 'compressed'}))
    .pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"],{map: false }))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))

    // Place in dest folder
    .pipe(gulp.dest('../assets/styles/'))

    // .pipe(livereload())
});

// Task: Scripts
gulp.task('scripts', function() {
    gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(babel({
			presets: ['es2015']
		}))
    .pipe(gulp.dest('../../assets/'));
});


// Watch for changes
gulp.task('watch', ['serve'], function () {

    livereload.listen();

	// run the sass and penthouse task when path.styles are changed
    gulp.watch((paths.styles), ['sass']);

	// run the scripts task when path.scripts are changed
    gulp.watch((paths.scripts), ['scripts']);


});


gulp.task('default', ['watch']);
