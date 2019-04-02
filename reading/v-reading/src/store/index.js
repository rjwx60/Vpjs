import Vue from 'vue'
import Vuex from 'vuex'

// module
import book from './module/book'

// getters
import getters from './getters'

// actions
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book
  },
  getters,
  actions
})
