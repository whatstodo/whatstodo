import { requireAll, slugify, escape } from '@/utils'
import { setItem, setItems } from './mutations'

const data = requireAll(
  require.context('@/../content/positions', false, /\.ya?ml$/)
)

export const positions = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    /**
     * Return a position with relational information.
     */

    item: ({ byId }, _getters, _rootState, rootGetters) => id => ({
      ...byId[id],
      signedBy: rootGetters['users/haveSigned'](id).map(user => user.id),
      notes: rootGetters['users/notes'](id)
    }),

    /**
     * Return all positions with relational information.
     */
    items: ({ allIds }, getters) => allIds.map(getters.item),

    /**
     * Return all positions with relational information and their current
     * status for the logged in user.
     */
    withStatus: (_state, getters, _rootState, rootGetters) =>
      getters.items.map(el => ({
        ...el,
        signed: rootGetters['collection/includes'](el.id),
        selected: rootGetters['selection/item'](el.id)?.status
      }))
  },

  mutations: {
    setItem,
    setItems
  },

  actions: {
    load({ commit }) {
      commit('setItems', data)
    },

    add({ commit }, data) {
      const id = slugify(data.title)
      for (const [key, value] of Object.entries(data)) {
        data[key] = escape(value)
      }
      commit('setItem', { ...data, id })
    }
  }
}
