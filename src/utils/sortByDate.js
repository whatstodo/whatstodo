const dateToNumber = date => parseInt(date.replace(/\D/g, ''))

export const sortByDate = list =>
  [...list].sort((a, b) => {
    return dateToNumber(b.date) - dateToNumber(a.date)
  })
