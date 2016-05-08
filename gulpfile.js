var gulp   = require('gulp');
var sass   = require('gulp-sass');
var jshint = require('gulp-jshint');
var server = require('browser-sync');
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream');

// Style
gulp.task('style', function() {
   return gulp.src( 'src/sass/main.scss' )
      .pipe(sass({
         style: 'expanded',
         noCache: true
      }))
      .pipe(gulp.dest( 'public/styles' ));
});

//JS: Make a browserify bundle, with source files transpiled
gulp.task('js', function () {
  browserify('src/browserify-source.js')
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/js'));
});


// Static Server with Reload
gulp.task('server', function() {
   return server.init(null, {
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
      gulp.watch('src/sass/**/*.scss', ['style']);
      gulp.watch('src/react-src/**/*.js',  ['js' ]);

      return gulp.watch('public/**/**', function(file) {
         if (file.type === "changed") {
            return server.reload(file.path);
         }
      });
});

// Default
gulp.task('default', function(){
      gulp.start('style', 'js', 'server', 'watch');
});