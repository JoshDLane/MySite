module.exports = (config, env) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "style-loader!css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ],
        include: path.resolve('src')
      }
    )
    return config
  }