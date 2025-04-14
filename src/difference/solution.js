/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */

export const difference = (array = [], values = []) => {
    return [...new Set(array.filter((item) => !values.includes(item)))];
};
