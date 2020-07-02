export default {
  sign({ commit, getters }) {
    const selection = getters['selection/items']
    for (const { id, status } of selection) {
      if (status) {
        commit('collection/set', { id, note: '' })
      } else {
        commit('collection/remove', id)
      }
    }
    commit('selection/clear')
  }
}
