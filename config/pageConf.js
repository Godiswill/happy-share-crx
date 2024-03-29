module.exports = {
  // main: { // 必须需要 main 入口
  //   entry: 'src/pages/index',
  //   template: 'public/index.html',
  //   filename: 'index', // 输出为 index.html，默认主入口
  // },
  background: {
    entry: 'src/pages/background/index',
  },
  content: {
    entry: 'src/pages/content/index',
  },
  // devtools: {
  //   entry: 'src/pages/devtools/index',
  //   template: 'public/index.html',
  // },
  // newtab: {
  //   entry: 'src/pages/newtab/index',
  //   template: 'src/pages/newtab/index.html',
  // },
  // options: {
  //   entry: 'src/pages/options/index',
  //   template: 'src/pages/options/index.html',
  // },
  // panel: {
  //   entry: 'src/pages/panel/index',
  //   template: 'public/index.html',
  // },
  popup: {
    entry: 'src/pages/popup/index',
    template: 'public/index.html',
  },
  // develop: {
  //   entry: 'src/pages/develop/index',
  //   template: 'public/index.html',
  // },
};
