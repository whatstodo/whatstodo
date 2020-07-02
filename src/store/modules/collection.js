import { get, includes } from './getters'
import { add, remove } from './mutations'

export const collection = {
  namespaced: true,

  state: () => ({
    byId: {
      'faire-sprache': { note: 'aha' },
      'open-source-software': { note: 'nö' }
    },
    allIds: ['faire-sprache', 'open-source-software']
  }),

  getters: {
    get,
    includes
  },

  mutations: {
    add,
    remove
  },

  actions: {
    add({ commit }, { positionId, note }) {
      commit('add', { id: positionId, note })
    },

    remove({ commit }, positionId) {
      commit('remove', positionId)
    }
  }
}
