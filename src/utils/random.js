/**
 * Return random integer number between min (inclusive) and max (exclusive).
 * @param {number} min
 * @param {number} max
 */
export const random = (min, max) =>
  Math.floor(Math.random() * (max - min) + min)
