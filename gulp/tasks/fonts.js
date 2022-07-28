import gulp from 'gulp';
import plumber from 'gulp-plumber';
import paths from '../paths';
const browserSync = require('browser-sync').create();
import ttf2woff from 'gulp-ttf2woff';

// * описание таска
const fonts = () =>
    gulp
    .src(paths.fonts.src)
    .pipe(plumber())
    .pipe(ttf2woff())
    .pipe(gulp.dest(paths.iconMove.dest))
    .pipe(browserSync.stream());

export default fonts;
