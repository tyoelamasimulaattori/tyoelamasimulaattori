'use strict';

process.env.NODE_PATH = 'resources';

var browserify = require('browserify');
var concat = require('gulp-concat');
var es = require('event-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus');
var watchify = require('watchify');

var config = {
  scripts: {
    source: './resources/js/main.js',
    destination: './public/js/',
    filename: 'main.js',
    extensions: ['.jsx']
  },
  styles: {
    source: './resources/styles/styles.styl',
    less: './resources/**/*.less',
    watch: './resources/**/*.*',
    destination: './public/css/'
  },
  assets: {
    source: ['./resources/assets/**/*.*', './bower_components/font-awesome/fonts*/*.*'],
    watch: './resources/assets/**/*.*',
    destination: './public/'
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
 * Builds stylus and less files from source directory to public directory as .css files
 */

gulp.task('styles', function() {
  return es.merge(
    gulp.src(config.styles.less)
    .pipe(less()),
    gulp.src(config.styles.source)
      .pipe(stylus({'include css': true}))
  )
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(config.styles.destination))
  .pipe(livereload({auto: false}));
});

/*
 * Copies files from assets directory to public directory
 */

gulp.task('assets', function() {
  return gulp.src(config.assets.source).pipe(gulp.dest(config.assets.destination));
});


/*
 * Listens for file changes and runs the tasks defined above
 */

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.assets.watch, ['assets']);
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

gulp.task('build', ['scripts', 'styles', 'assets']);
gulp.task('default', ['styles', 'assets', 'watch']);
