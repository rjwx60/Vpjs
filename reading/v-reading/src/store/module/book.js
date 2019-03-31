const book = {
  state: {
    test: 1
  },
  mutations: {
    'SET_TEST': (state, newTEST) => {
      state.test = newTEST
    }
  },
  actions: {
    setTEST: ({ commit, state }, newTEST) => {
      return commit('SET_TEST', newTEST)
    }
  }
}

export default book
