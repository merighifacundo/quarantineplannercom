const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withImages({
    cssModules: true,
    webpack: (config) => {
       return config
    }
   }));