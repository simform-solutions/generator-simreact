const path = require('path')
// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
      src: path.resolve(__dirname, '../', 'src'),
      components: path.resolve(__dirname, '..', 'src', 'components'),
      containers: path.resolve(__dirname, '..', 'src', 'containers'),
      store: path.resolve(__dirname, '..', 'src', 'store'),
      sagas: path.resolve(__dirname, '..', 'src', 'sagas'),
      config: path.resolve(__dirname, '..', 'src', 'config'),
      assets: path.resolve(__dirname, '..', 'src', 'assets'),
      services: path.resolve(__dirname, '..', 'src', 'services')
    }
  },
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2|png|jpe?g|gif|mp4|mpeg|mov|ogg)$/,
        loader: 'file-loader'
      }
    ]
  }
}
