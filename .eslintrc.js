module.exports = {
	plugins: ["react", "jsx-a11y"],
	env: {
		browser: true,
	},
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
		linkComponents: [{ name: "Link", linkAttribute: "to" }],
	},
	extends: ["plugin:react/recommended", "prettier", "prettier/react"],
	rules: {
		"no-console": "error",
		"no-debugger": "error",
		"no-var": "error",
		"eqeqeq": "error",
		"no-restricted-properties": [
			"error",
			{
				object: "document",
				property: "title",
			},
		],
		"react/no-unescaped-entities": "warn",
		"react/prop-types": "off",
		"react/forbid-elements": [
			"error",
			{
				forbid: [
					{
						element: "button",
						message: "Use our custom SEC.Button component instead.",
					},
					{
						element: "a",
						message: "Use our custom SEC.Link component instead.",
					},
					{
						element: "Link",
						message: "Use our custom SEC.Link component instead.",
					},
					{
						element: "NavLink",
						message: "Use our custom SEC.Link component instead.",
					},
					{
						element: "Box",
						message: "There is no reason to use material-ui's Box component.",
					},
				],
			},
		],
		"react/prefer-stateless-function": "warn",
	},
};
