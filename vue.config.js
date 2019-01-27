
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'  ? '/dist/' : '/',

    devServer: {
        proxy: {
            '/v2': {
                target: 'https://douban.uieee.com/',
                // target: 'http://192.168.1.11:5000/',
                ws: true,
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            }

        }
    }    
}