export const items = ({ allIds, byId }) => allIds.map(id => byId[id])

export const get = state => id => state.byId[id]

export const includes = state => id => !!state.byId[id]
