var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var browserify  = require('browserify')
var babelify    = require('babelify')
var source      = require('vinyl-source-stream');

// Style
gulp.task('style', function() {
   return gulp.src( 'src/app.scss' )
      .pipe(sass({
         style: 'expanded',
         noCache: true
      }))
      .pipe(gulp.dest( 'public/' ));
});

//JS: Make a browserify bundle, with source files transpiled
gulp.task('js', function () {
   browserify('src/app.js')
      .transform(babelify, {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source('app.bundle.js'))
      .pipe(gulp.dest('public/'));
});

// Copy index.html
gulp.task('copy', function () {
   return gulp.src('src/index.html')
      .pipe(gulp.dest('public/'));
});

// Static Server with Reload
gulp.task('server', function() {
   return browserSync.init(null, {
      open: true,
      server: {
         baseDir: './public'
      },
      watchOptions: {
         debounceDelay: 300
      }
   });
});

// Watch for changes
gulp.task('watch', function() {
   gulp.watch('src/**/*.scss', ['style']);
   gulp.watch('src/**/*.js', ['js']);
   gulp.watch('src/**/*.jsx', ['js']);
   gulp.watch('src/index.html', ['copy']);

   return gulp.watch('public/**/**', function(file) {
      if (file.type === 'changed') {
         return browserSync.reload(file.path);
      }
   });
});

// Default
gulp.task('default', function(){
   gulp.start('style', 'js', 'copy', 'server', 'watch');
});