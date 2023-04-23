module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'plugin:react/recommended',
		'google',
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'plugins': [
		'react',
		'react-hooks',
	],
	'rules': {
		'property-sort-order': 'off',
		'class-name-format': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'indent': [
			'warn',
			'tab',
		],
		'no-tabs': [
			'off',
		],
		'quotes': [
			'warn',
			'single',
		],
		'semi': [
			'warn',
			'always',
		],
		'camelcase': [
			'off',
		],
		'max-len': [
			'warn',
			250,
			2,
			{
				'ignoreUrls': true,
				'ignoreComments': false,
			},
		],
		'react/prop-types': [
			'off',
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'no-mixed-spaces-and-tabs': [
			'off',
		],
	},
};
