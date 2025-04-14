/**
 * Converts a nested array into a single array with no nesting.
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */

/**
 * Use Built-in method.
 */

export const deepFlat = (array = []) => array.flat(Infinity);

console.log(deepFlat());
/**
 * Use Recursion.
 */

// const deepFlat = (array = []) => {
//     const newArr = [];
//     for (const item of array) {
//         Array.isArray(item)
//             ? newArr.push(...deepFlat(item))
//             : newArr.push(item);
//     }
//     return newArr;
// };
