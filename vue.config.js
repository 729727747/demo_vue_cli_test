const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    devServer: {
    // proxy: 'http://localhost:8082'
    proxy: {
      '/jeecg-boot': {
        target: 'http://localhost:8082',
        ws: true,
        changeOrigin: true
      }
    }
  }
})


