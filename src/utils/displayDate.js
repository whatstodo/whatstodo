export const displayDate = dateString => {
  if (dateString) {
    const [year, month, day] = dateString.split('-')
    return [parseInt(day), parseInt(month), year.substring(2, 4)].join('.')
  }
}
