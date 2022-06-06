module.exports = {
    lintOnSave: false,
    devServer: {
        hot: false,
        disableHostCheck: true,
        port: 4001,
        open: false,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },

};