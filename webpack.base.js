module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react', 'stage-0', ['env', {
            targets: {
              browsers: ['last 2 versions'] // 在打包编译的过程中 babel会兼容 所有主流浏览器的最后两个版本
            }
          }]]
        }
      }
    ]
  }
}