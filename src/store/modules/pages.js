import { requireAll } from '@/utils'
import { setItem } from './mutations'

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
    setItem
  },

  actions: {
    load({ commit }, id) {
      commit('setItem', data[id])
    }
  }
}
