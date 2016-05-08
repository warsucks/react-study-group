var path        = require('path');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var browserify  = require('browserify')
var babelify    = require('babelify')
var source      = require('vinyl-source-stream');

options = {
   basedir: __dirname,
   dst: path.join(__dirname, 'public/'),
   style: path.join(__dirname, 'src/app.scss'),
   js: path.join(__dirname, 'src/app.js'),
   bundle: 'app.bundle.js',
   index: path.join(__dirname, 'src/index.html'),
   watch: path.join(__dirname, 'src/**/*.'),
   reloadWatch: path.join(__dirname, 'public/**/**')
}

// Style
gulp.task('style', function() {
   return gulp.src(options.style)
      .pipe(sass({
         style: 'expanded',
         noCache: true
      }))
      .pipe(gulp.dest(options.dst));
});

//JS: Make a browserify bundle, with source files transpiled
gulp.task('js', function () {
   browserify(options.js)
      .transform(babelify, {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source(options.bundle))
      .pipe(gulp.dest(options.dst));
});

// Copy index.html
gulp.task('copy', function () {
   return gulp.src(options.index)
      .pipe(gulp.dest(options.dst));
});

// Static Server with Reload
gulp.task('server', function() {
   return browserSync.init(null, {
      open: true,
      server: {
         baseDir: options.dst
      },
      watchOptions: {
         debounceDelay: 300
      }
   });
});

// Watch for changes
gulp.task('watch', function() {
   gulp.watch(options.watch + '.scss', ['style']);
   gulp.watch(options.watch + '.js', ['js']);
   gulp.watch(options.watch + '.jsx', ['js']);
   gulp.watch(options.index, ['copy']);

   return gulp.watch(options.reloadWatch, function(file) {
      if (file.type === 'changed') {
         return browserSync.reload(file.path);
      }
   });
});

// Default
gulp.task('default', function(){
   gulp.start('style', 'js', 'copy', 'server', 'watch');
});