import { requireAll } from '@/utils'
import { items } from './getters'
import { set } from './mutations'

const data = requireAll(
  require.context('@/../content/users', false, /\.ya?ml$/)
)

export const users = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    items,

    haveSigned: (_state, getters) => positionId =>
      getters.items.filter(user => !!user.collection?.[positionId]),

    notes: (_state, getters) => positionId =>
      getters.haveSigned(positionId).map(user => {
        const collectionEntry = user.collection[positionId]
        return collectionEntry && { ...collectionEntry, userId: user.id }
      })
  },

  mutations: {
    set
  },

  actions: {
    load({ commit }) {
      commit('set', data)
    }
  }
}
