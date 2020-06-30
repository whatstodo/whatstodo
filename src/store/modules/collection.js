import { get, includes } from './getters'

export const collection = {
  namespaced: true,

  state: () => ({
    byId: {
      'faire-sprache': { note: 'aha' },
      'open-source-software': { note: 'nö' }
    },
    allIds: ['faire-sprache', 'open-source-software']
  }),

  getters: {
    get,
    includes
  }
}
