var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha   = require('gulp-mocha');
var shell   = require('gulp-shell');

function lintHandler() {
  return gulp
           .src([
              './index.js',
              './utils/*.js',
              './test/*.js'
            ])
           .pipe(jshint())
           .pipe(jshint.reporter(stylish));
}
gulp
  .task('lint', lintHandler);

function testHandler() {
  return gulp
           .src(['./test/*.js'])
           .pipe(mocha({ reporter: 'spec' }));
}
gulp
  .task('test', testHandler);

gulp
  .task(
    'coverage',
    shell
      .task([
        './node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage'  
      ])
  );

gulp
  .task('default', ['lint', 'coverage']);
