export function requireAll(context) {
  const result = {}
  for (const key of context.keys()) {
    // Use the filename as an id. Strip the directory, leading number and file
    // extension. For example `./01-test.yml` becomes `test`.
    const id = key.match(/^(.+\/)?(\d+-)?(.+)\.(.+)$/)[3]
    const value = context(key)
    result[id] = { ...value, id }
  }
  return result
}
