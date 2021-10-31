module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // vue.config.js file to be place in the root of your repository
  publicPath: process.env.NODE_ENV === 'production'
  ? '/crypto/'
  : '/'
}
