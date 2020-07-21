import { item, items } from './getters'
import { setItem, clear } from './mutations'

export const selection = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    item,
    items,
    isEmpty: ({ allIds }) => !allIds.length
  },

  mutations: {
    clear,
    setItem
  }
}
