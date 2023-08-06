// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

const config = {
	plugins: {
		// 'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
	}
};

module.exports = config;
