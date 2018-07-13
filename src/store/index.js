import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './muatations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  actions,
  mutations
})
