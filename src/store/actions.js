export default {
  sign({ commit, dispatch, state, getters }) {
    const selection = getters['selection/items']
    const collection = state.collection.byId

    for (const { id, status } of selection) {
      if (status) {
        collection[id] = { id }
      } else {
        delete collection[id]
      }
    }

    dispatch('collection/update', collection)
    commit('selection/clear')
  }
}
