const paths = {
    'styles': {
        'src': 'src/assets/styles/*.scss',
        'dest': 'dist/',
    },
    'scripts': {
        'src': 'src/scripts/*.js',
        'dest': 'dist/',
    },
    'html': {
        'src': 'src/pages/*.html',
        'dest': 'dist/',
    },
    'images': {
        'src': 'src/assets/img/*.{jpg,jpeg,png,svg,gif,webp,ico}',
        'dest': 'dist/img/',
    },
    'iconMove': {
        'src': 'src/assets/*.{jpg,jpeg,png,svg,gif,webp,ico}',
        'dest': 'dist/'
    },
    'fonts': {
        'src': 'src/assets/fonts/*.{ttf,woff,woff2}',
        'dest': 'dist/fonts/',
    },
    'svg': {
        'src': 'src/assets/svg/*.svg',
        'dest': 'dist/svg/',
    },
    'clean': {
        'dir': 'dist/',
    },
    'serve': {
        'dir': 'dist/',
    },
};

export default paths
