/**
 * Return all items as an array.
 */
export const items = ({ allIds, byId }) => allIds.map(id => byId[id])

/**
 * Return item.
 */
export const item = state => id => state.byId[id]

/**
 * Check if item exists.
 */
export const includes = ({ byId }) => id => !!byId[id]

/**
 * Check if item has been modified (has unsaved changes).
 */
export const modified = ({ byId }) => id =>
  byId[id] && !!Object.keys(byId[id].draft || {}).length
