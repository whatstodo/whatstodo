export const displayDate = dateString => {
  const [year, month, day] = dateString.split('-')
  return [day, month, year].join('.')
}
