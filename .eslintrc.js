module.exports = {
	plugins: [
		"react",
		"jsx-a11y"
	],
	env: {
		browser: true,
	},
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		}
	},
	settings: {
		react: {
			version: "detect",
		},
		linkComponents: [
			{ name: "Link", linkAttribute: "to" },
		],
	},
	extends: [
		"plugin:react/recommended",
		"prettier",
		"prettier/react",
	],
	rules: {
		"no-console": "error",
		"no-debugger": "error",
		"no-var": "error",
		"eqeqeq": "error",
		"react/no-unescaped-entities": "warn",
		"react/prop-types": "off",
	}
}
