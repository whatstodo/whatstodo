import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import * as modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions,
  modules
})
