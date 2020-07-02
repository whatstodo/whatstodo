import { get, includes, items } from './getters'
import { set, remove } from './mutations'

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
    includes,
    items
  },

  mutations: {
    set,
    remove
  },

  actions: {
    add({ commit }, { positionId, note }) {
      commit('set', { id: positionId, note })
    },

    remove({ commit }, positionId) {
      commit('remove', positionId)
    }
  }
}
