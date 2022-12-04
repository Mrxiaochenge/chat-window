module.exports = {
  // 资源基本路径
  publicPath: './',
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: true,
    port: 8080,
    hotOnly: true,
    proxy: null, // 服务器代理
  },
  // 为预处理器的 loader 传递自定义选项。比如传递给
  // sass-loader 时，使用 `{ sass: { ... } }`。
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/style/index.scss";',
      },
    },
  },
};
