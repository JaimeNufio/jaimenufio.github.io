const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/webpage' //process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
})
