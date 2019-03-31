module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    // 开关 eslint 检查
    lintOnSave: false
}
