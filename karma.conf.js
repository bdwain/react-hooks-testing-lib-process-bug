module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],

    files: [
      'src/**/*.js'
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack'
    ],

    preprocessors: {
      'src/**/*.js': [ 'webpack' ]
    },

    autoWatch: false,
    singleRun: true,
    browsers: ['ChromeHeadless'],
    webpack: require('./webpack.config')
  })
}