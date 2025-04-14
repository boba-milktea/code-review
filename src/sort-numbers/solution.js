/**
 * Sorts an array of numbers from smallest to largest to largest.
 *
 * @param {number[]} [arrayOfNumbers=[]] - the array of numbers to sort.
 * @returns {number[]} a new array with the same numbers, but sorted.

 */

export const sortNumbers = (arrayOfNumbers = []) => {
    const newArray = [...arrayOfNumbers];
    newArray.sort((a, b) => a - b);
    return newArray;
};
