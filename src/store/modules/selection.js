import { get, items } from './getters'
import { set, clear } from './mutations'

export const selection = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    get,
    items
  },

  mutations: {
    clear,
    set
  },

  actions: {
    set({ commit }, { id, status }) {
      commit('set', { id, status })
    },

    clear({ commit }) {
      commit('clear')
    }
  }
}
