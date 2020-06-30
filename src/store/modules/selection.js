import { get } from './getters'

export const selection = {
  namespaced: true,

  state: () => ({
    byId: {
      'faire-sprache': true,
      'open-source-software': false
    },
    allIds: ['faire-sprache, open-source-software']
  }),

  getters: {
    get
  }
}
