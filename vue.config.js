const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    devServer: {
    // proxy: 'http://localhost:8082'
    port: 8089,
    proxy: {
      '/api': {
        target: 'http://localhost:8082',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})


