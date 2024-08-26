const {nodeResolve} = require('@rollup/plugin-node-resolve');

module.exports = [
	{
		input: "dist/index.js",
		output: {
			file: "bundle/index.js",
			format: "commonjs"
		},
		plugins: [nodeResolve()],
		external: []
	}
];