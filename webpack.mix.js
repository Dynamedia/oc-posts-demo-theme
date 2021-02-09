let mix = require('laravel-mix');

mix.js('assets/js/src/app.js', 'assets/js/dist');

mix.sass('assets/css/src/app.scss', 'assets/css/src/',{
    sassOptions: {
        //outputStyle: 'nested'
    }
});

mix.postCss('assets/css/src/app.css', 'assets/css/dist');

mix.options({
    postCss: [
        require('postcss-custom-properties')
    ]
});