const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtracPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: {
		index: "./src/index.ts",
	},

	output: {
		filename: "./javascript/[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "name/[hash][ext][query]",
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtracPlugin.loader, "css-loader", "sass-loader"],
			},

			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]",
				},
			},
		],
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	/*_______ Options _______*/
	devServer: {
		watchFiles: ["src/**/*", "dist/**/*"],
	},

	optimization: {
		runtimeChunk: "single",
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Output Management",
			template: "./src/index.html",
		}),

		new MiniCssExtracPlugin({
			filename: "./css/style.css",
		}),
	],
};
