import Vue from 'vue'
import Vuex from 'vuex'

// module
import book from './module/book'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book
  }
})
