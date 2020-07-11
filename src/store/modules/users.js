import { requireAll } from '@/utils'
import { item, items } from './getters'
import { setItem, setItems, setDraft } from './mutations'

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
    item,

    items,

    loggedIn(state) {
      return state.byId['user']
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
    setItem,
    setItems,
    setDraft
  },

  actions: {
    load({ commit }) {
      commit('setItems', data)
    }
  }
}
