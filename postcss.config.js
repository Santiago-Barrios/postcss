module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   grid: true
    // }),
    require('postcss-import'),
    // require('postcss-font-magician'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
        customProperties: false,
        calc: false,
      }
    }),
    require('postcss-custom-media')({
      preserve: false,
    })
  ]
}
const postcssCustomMedia = require('postcss-custom-media');
