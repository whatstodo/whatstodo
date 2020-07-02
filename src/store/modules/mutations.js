import Vue from 'vue'

export const set = (state, data) => {
  state.byId = data
  state.allIds = Object.keys(data)
}

export const add = (state, item) => {
  const { id } = item
  Vue.set(state.byId, id, item)
  state.allIds = Object.keys(state.byId)
}

export const remove = (state, id) => {
  Vue.delete(state.byId, id)
  state.allIds = Object.keys(state.byId)
}

export const clear = state => {
  state.byId = {}
  state.allIds = []
}
