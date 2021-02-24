// postcss.config.js
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
	preset: 'default'
});
const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.html', './src/**/*.js'],
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
	plugins: [
		tailwindcss,
		autoprefixer,
		...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
	]
};