import { requireAll } from '@/utils'
import { get, items } from './getters'
import { set, init } from './mutations'

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
    get,

    items,

    loggedIn(state) {
      return state.byId['studio-super-future']
    },

    haveSigned: (_state, getters) => positionId =>
      getters.items.filter(user => !!user.collection?.[positionId]),

    notes: (_state, getters) => positionId =>
      getters.haveSigned(positionId).reduce((result, user) => {
        const collectionEntry = user.collection[positionId]
        const userId = user.id
        return collectionEntry?.note
          ? result.concat({
              ...collectionEntry,
              userId,
              positionId,
              id: `${userId}/${positionId}`
            })
          : result
      }, [])
  },

  mutations: {
    set,
    init
  },

  actions: {
    load({ commit }) {
      commit('init', data)
    }
  }
}
