import * as getters from './getters'
import { setItem, clear } from './mutations'

export const selection = {
  namespaced: true,

  state: () => ({
    byId: {},
    allIds: []
  }),

  getters: {
    ...getters
  },

  mutations: {
    clear,
    setItem
  }
}
