import { formatDate } from '@/utils'
import { includes } from './getters'
import { init, setProp } from './mutations'

export const collection = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    includes,

    items: ({ allIds }, getters) => allIds.map(getters.item),

    item: ({ byId }, _getters, rootState) => id => ({
      ...byId[id],
      position: rootState.positions.byId[id]
    })
  },

  mutations: {
    init,
    setProp,

    saveDraft({ allIds, byId }) {
      const date = formatDate(new Date())
      for (const id of allIds) {
        const item = byId[id]
        byId[id] = { ...item, note: item.draft, date }
      }
    }
  },

  actions: {
    update({ commit, rootGetters }, data) {
      commit('init', data)
      const user = rootGetters['users/loggedIn']
      commit('users/set', { ...user, collection: data }, { root: true })
    },

    publish({ commit }) {
      commit('saveDraft')
    }
  }
}
