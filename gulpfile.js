
function html() {
    const { src, dest } = require('gulp');
    return src('./src/index.html')
        .pipe(dest('./dist'));
}

function watch () {
    const gulpConfig = {
        ignoreInitial: false
    }
    const { watch } = require('gulp');
    watch('./src/*.html', gulpConfig, html);
}

exports.default = html;
exports.watch = watch;