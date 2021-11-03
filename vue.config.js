module.exports = {
    //路径前缀
    publicPath: "/",
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: (config) => {
      config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    },
    configureWebpack: config => {
      // 为生产环境修改配置...
      if (process.env.NODE_ENV === 'production') {
          config.mode = 'production';
          // 打包文件大小配置
          config.performance = {
            maxEntrypointSize: 10000000,
            maxAssetSize: 30000000
          }
      }
    },
};