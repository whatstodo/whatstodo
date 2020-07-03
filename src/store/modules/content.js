import { requireAll } from '@/utils'
import { get } from './getters'
import { set } from './mutations'

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
    get
  },

  mutations: {
    set
  },

  actions: {
    load({ commit }, id) {
      commit('set', data[id])
    }
  }
}
