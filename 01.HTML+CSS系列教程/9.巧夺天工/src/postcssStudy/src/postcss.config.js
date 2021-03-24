const autoprefixer = require('autoprefixer');
const pcImport = require('postcss-import');
const cssnano = require('cssnano');
const cssnext = require('postcss-cssnext');
const stylelint = require('stylelint');
const sprites = require('postcss-sprites');

module.exports = {
    plugins : [
        // autoprefixer({
        //     browsers : [' > 0% ']
        // }),
        // pcImport,
        // cssnano,
        cssnext,
        stylelint({
            "rules" : {
                "color-no-invalid-hex" : true
            }
        }),
        sprites({
            spritePath : './dist'
        })
    ]
};