export const escape = text => {
  const div = document.createElement('div')
  div.innerText = text
  return div.innerHTML
}
