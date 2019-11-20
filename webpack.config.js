const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: '/node_modules/'
            },
        ]
    }
};
