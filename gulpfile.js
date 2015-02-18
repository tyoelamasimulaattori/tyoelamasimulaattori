'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus');
var watchify = require('watchify');

var config = {
  scripts: {
    source: './resources/js/main.js',
    destination: './public/js/',
    filename: 'main.js'
  },
  styles: {
    source: './resources/styles/styles.styl',
    watch: './resources/styles/**/*.styl',
    destination: './public/css/'
  },
  templates: {
    watch: './resources/views/**/*.blade.php'
  }
};

function handleError(err) {
  gutil.log(gutil.colors.red(err.message));
  gutil.beep();
  return this.emit('end');
}

/*
 * Builds all javascript-files to a single file
 */

gulp.task('scripts', function() {
  return browserify({
    entries: [config.scripts.source],
    extensions: config.scripts.extensions,
    debug: false
  }).bundle()
  .on('error', handleError)
  .pipe(source(config.scripts.filename))
  .pipe(gulp.dest(config.scripts.destination));
});

/*
 * Builds stylus files from source directory to public directory as .css files
 */

gulp.task('styles', function() {
  return gulp.src(config.styles.source)
  .pipe(stylus({'include css': true}))
  .pipe(gulp.dest(config.styles.destination))
  .pipe(livereload({auto: false}));
});

/*
 * Listens for file changes and runs the tasks defined above
 */

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.templates.watch, function(event) {
    livereload.changed(event.path);
  });

  var bundle = watchify(browserify({
    entries: [config.scripts.source],
    extensions: config.scripts.extensions,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  return bundle.on('update', function() {
    return bundle.bundle()
      .on('error', handleError)
      .pipe(source(config.scripts.filename))
      .pipe(gulp.dest(config.scripts.destination))
      .pipe(livereload());
  }).emit('update');
});

gulp.task('build', ['scripts', 'styles']);
gulp.task('default', ['styles', 'watch']);
