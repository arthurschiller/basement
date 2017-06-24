module.exports = {
    src: './dev',
    dist: './dist',
    paths: {
        js: './dev/src/js/**/*.js',
        jsx: './dev/src/js/**/*.jsx',
        scss: './dev/src/scss/**/*.scss',
        html: './dev/**/*.html',
        svg: './dev/svg/raw/*.svg',
        fonts: './dev/fonts/**/*',
        images: './dev/images/**/*'
    },
    sassPaths: './dev/src/scss',
    autoprefixerOptions: {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    },
};