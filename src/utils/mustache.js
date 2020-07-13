export const mustache = (text, dictionary) =>
  text.replace(
    /{{([^{}]*)}}/g,
    (_match, variableName) => dictionary[variableName]
  )
