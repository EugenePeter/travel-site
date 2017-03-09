module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: "./app/temp/scripts",
        filename: "App.js"
    },
    module: {
        loaders: [
            {
                loaders: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/ 
            }
        ]
    }
}