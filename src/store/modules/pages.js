import { requireAll } from '@/utils'
import Vue from 'vue'

const data = requireAll(
  require.context('@/../content/pages', false, /\.ya?ml$/)
)

export const pages = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  mutations: {
    add(state, item) {
      const { id } = item
      Vue.set(state.byId, id, item)
      state.allIds.push(id)
    }
  },

  actions: {
    load({ commit }, id) {
      commit('add', data[id])
    }
  }
}
