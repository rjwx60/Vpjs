const book = {
  state: {
    fileName: '',
    // 上下菜单可视性
    menuVisible: false,
    // 阅读器
    currentBook: null,
    // 菜单栏选项 -1: 不显示 0: 字号 1:主题 2: 进度 3: 目录
    settingVisible: -1,
    // 默认字体大小
    defaultFontSize: 16

  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENUVISIBLE': (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    'SET_CURRENT_BOOK': (state, currentBook) => {
      state.currentBook = currentBook
    },
    'SET_SETTINGVISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_DEFAULT_FONT_SIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    }
  },
}

export default book
