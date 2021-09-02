const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'sass',
      'patterns': [
        path.resolve(__dirname, './src/styles/*.sass'),
      ]
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //       .use('url-loader')
  //         .loader('url-loader')
  //         .tap(options => {
  //           // file-loader is the fallback loader
  //           options.fallback.options.name = 'img/[name].[ext]'
  //           return options                             
  //         })
  // }
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        const transformAssetUrls = options.transformAssetUrls || {}
        return {
          ...options,
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href',
            // Add any other pre defined custom asset items
            ...transformAssetUrls,
          },
        }
      })
    // ...
  }
}