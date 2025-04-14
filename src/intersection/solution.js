/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 */

export const intersection = (array = [], values = []) => {
    const set = new Set(values);
    return [...new Set(array.filter((item) => set.has(item)))];
};
