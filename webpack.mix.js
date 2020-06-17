const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .styles([
    	'resources/css/main.css',
    	'resources/css/buttons.css',
    	'resources/css/sections.css',
    	'resources/css/custom_sections.css',
    	'resources/css/media_queries.css',
    ], 'public/css/app.css');
