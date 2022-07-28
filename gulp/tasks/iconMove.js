import gulp from 'gulp';
import plumber from 'gulp-plumber';
import paths from '../paths';
const browserSync = require('browser-sync').create();

// * описание таска
const iconMove = () =>
    gulp
    .src(paths.iconMove.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.iconMove.dest))
    .pipe(browserSync.stream());

export default iconMove;
