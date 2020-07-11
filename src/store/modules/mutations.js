import Vue from 'vue'

/**
 * Update (replace) and item.
 */
export const setItem = (state, item) => {
  const { id } = item
  Vue.set(state.byId, id, item)
  state.allIds = Object.keys(state.byId)
}

/**
 * Set an item's property.
 */
export const setProp = (state, { id, key, value }) => {
  const item = state.byId[id]
  if (item) {
    Vue.set(state.byId, id, { ...item, [key]: value })
  } else {
    throw new Error(`Item with id '${id}' doesn't exist.`)
  }
}

/**
 * Set an item's property as a draft.
 */
export const setDraft = (state, { id, key, value }) => {
  const item = state.byId[id]
  if (item) {
    const draft = item.draft || Vue.set(item, 'draft', {})
    item && Vue.set(draft, key, value)
  } else {
    throw new Error(`Item with id '${id}' doesn't exist.`)
  }
}

export const applyDraft = ({ byId }, id) => {
  const item = byId[id]
  if (item) {
    for (const [key, value] of Object.entries(item.draft || {})) {
      Vue.set(item, key, value)
    }
    Vue.set(item, 'draft', {})
  } else {
    throw new Error(`Item with id '${id}' doesn't exist.`)
  }
}

/**
 * Update (replace) items with new items. This will delete or override all
 * existing items.
 */
export const setItems = (state, items) => {
  state.byId = items
  state.allIds = Object.keys(items)
}

/**
 * Remove item.
 */
export const removeItem = (state, id) => {
  Vue.delete(state.byId, id)
  state.allIds = Object.keys(state.byId)
}

/**
 * Remove all items.
 */
export const clear = state => {
  state.byId = {}
  state.allIds = []
}
