// gulp/tasks/base/watch.js
'use strict';

// ----------------------------------
// watch tasks: 
//    bower
//    sass
//    nunjucks
//    js
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task('watch', function() {
    	gulp.watch(['./bower_components/**', './bower.json'], [config.task.bower]);
        gulp.watch(path.to.sass.src, [config.task.sass]);
        gulp.watch(path.to.nunjucks.watch, [config.task.nunjucks]);
        gulp.watch(path.to.js.src.watch, [config.task.scripts]);
    });

};