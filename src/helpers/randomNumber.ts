/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param min
 * @param max
 * @returns {number}
 *
 * @example
 * randomNumber(1, 10) // 1, 2, 3, 4, 5, 6, 7, 8, 9
 * randomNumber(1, 1) // 1
 * randomNumber(1, 0) // 0
 */
const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export default randomNumber;
