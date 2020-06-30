import Vue from 'vue'

export const set = (state, data) => {
  state.byId = data
  state.allIds = Object.keys(data)
}

export const add = (state, item) => {
  const { id } = item
  Vue.set(state.byId, id, item)
  state.allIds.push(id)
}
