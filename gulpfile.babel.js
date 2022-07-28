import { task, series, parallel } from 'gulp';
import scripts from './gulp/tasks/scripts';
import stylesDev from './gulp/tasks/stylesDev';
import stylesBuild from './gulp/tasks/stylesBuild';
import htmlDev from './gulp/tasks/htmlDev';
import htmlBuild from './gulp/tasks/htmlBuild';
import clean from './gulp/tasks/clean';
import watching from './gulp/tasks/watch';
import images from './gulp/tasks/images';
import iconMove from './gulp/tasks/iconMove';
import fonts from './gulp/tasks/fonts';

task('dev', series(htmlDev, stylesDev, scripts, images, iconMove, fonts, watching));
task('build', series(clean, parallel(htmlBuild, stylesBuild, scripts, images, iconMove, fonts)));
task('clean', clean);
