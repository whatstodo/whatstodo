import { requireAll } from '@/utils'
import * as getters from './getters'
import * as mutations from './mutations'

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
    ...getters,

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
    ...mutations
  },

  actions: {
    load({ commit }) {
      commit('setItems', data)
    },

    save({ commit }) {
      commit('applyDraft', 'user')
    },

    deleteAccount({ commit, dispatch }) {
      commit('removeItem', 'user')
      dispatch('logout', null, { root: true })
    }
  }
}
