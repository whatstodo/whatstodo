import { get } from './getters'
import { remove, clear } from './mutations'

export const selection = {
  namespaced: true,

  state: () => ({
    byId: {
      'faire-sprache': true,
      'open-source-software': false
    },
    allIds: ['faire-sprache, open-source-software']
  }),

  getters: {
    get
  },

  mutations: {
    remove,
    clear,

    add(state, { id, status }) {
      state.byId[id] = status
      state.allIds = Object.keys(state.byId)
    }
  },

  actions: {
    add({ commit }, { positionId, status }) {
      commit('add', { id: positionId, status })
    },

    clear({ commit }) {
      commit('clear')
    }
  }
}
