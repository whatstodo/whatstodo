import { get, includes, items } from './getters'
import { init } from './mutations'

export const collection = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    get,
    includes,
    items
  },

  mutations: {
    init
  },

  actions: {
    update({ commit, rootGetters }, data) {
      commit('init', data)
      const user = rootGetters['users/loggedIn']
      commit('users/set', { ...user, collection: data }, { root: true })
    }
  }
}
