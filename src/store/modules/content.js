import { requireAll } from '@/utils'
import { item } from './getters'
import { setItem } from './mutations'

const data = requireAll(
  require.context('@/../content/pages', false, /\.ya?ml$/)
)

export const content = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    item
  },

  mutations: {
    setItem
  },

  actions: {
    load({ commit }, id) {
      commit('setItem', data[id])
    }
  }
}
