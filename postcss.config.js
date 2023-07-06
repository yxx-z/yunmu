/* eslint-disable no-undef */
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'ios >= 7']
    },
    'postcss-pxtorem': {
      // 根节点 的 font-size
      rootValue: 16,
      propList: ['*'],
      // 忽略定义的变量
      selectorBlacklist: [':root']
    }
  }
}
