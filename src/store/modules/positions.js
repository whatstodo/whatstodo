import { requireAll, slugify, escape } from '@/utils'
import { set, init } from './mutations'

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
     * Return the positions with relational information.
     */
    items: ({ allIds, byId }, _getters, _rootState, rootGetters) =>
      allIds.map(id => ({
        ...byId[id],
        signedBy: rootGetters['users/haveSigned'](id).map(user => user.id),
        notes: rootGetters['users/notes'](id)
      })),

    /**
     * Return the positions list with relational information and their current
     * status for the logged in user.
     */
    withStatus: (_state, getters, _rootState, rootGetters) =>
      getters.items.map(el => ({
        ...el,
        signed: rootGetters['collection/includes'](el.id),
        selected: rootGetters['selection/get'](el.id)?.status
      }))
  },

  mutations: {
    set,
    init
  },

  actions: {
    load({ commit }) {
      commit('init', data)
    },

    add({ commit }, data) {
      const id = slugify(data.title)
      for (const [key, value] of Object.entries(data)) {
        data[key] = escape(value)
      }
      commit('set', { ...data, id })
    }
  }
}
