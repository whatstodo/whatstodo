import { formatDate } from '@/utils'
import * as getters from './getters'
import * as mutations from './mutations'

export const collection = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    ...getters,

    items: ({ allIds }, getters) => allIds.map(getters.item),

    item: ({ byId }, _getters, rootState) => id => ({
      ...byId[id],
      position: rootState.positions.byId[id]
    })
  },

  mutations: {
    ...mutations
  },

  actions: {
    update({ commit, rootGetters }, data) {
      commit('setItems', data)
      const user = rootGetters['users/loggedIn']
      commit('users/setItem', { ...user, collection: data }, { root: true })
    },

    publish({ commit, state, getters }) {
      const date = formatDate(new Date())
      for (const id of state.allIds) {
        if (getters['modified'](id)) {
          commit('applyDraft', id)
          commit('setProp', { id, key: 'date', value: date })
        }
      }
    }
  }
}
