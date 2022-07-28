import gulp from 'gulp';
const browserSync = require('browser-sync').create();
import plumber from 'gulp-plumber';
import paths from '../paths';

// * конфигурация для таска
// ? А тут нечего конфигурировать

// * описание таска

const htmlDev = () => gulp
    .src(paths.html.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());

export default htmlDev;
