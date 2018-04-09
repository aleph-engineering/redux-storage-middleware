var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'reduxStorageMiddleware.js',
        library: 'reduxStorageMiddleware',
        libraryTarget: 'umd',
    },
};
