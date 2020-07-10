export function requireAll(context) {
  const result = {}
  for (const key of context.keys()) {
    // Use the filename as an id. Strip the directory and file extension.
    const id = key.match(/^(.+\/)?(.+)\.(.+)$/)[2]
    const value = context(key)
    result[id] = { ...value, id }
  }
  return result
}
