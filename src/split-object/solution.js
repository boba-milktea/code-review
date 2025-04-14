/**
 * Splits an object into multiple objects with one key/value pair each.
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.

 */

export const splitObject = (toSeparate = {}) => {
    const arr = [];
    for (const key in toSeparate) {
        arr.push({ [key]: toSeparate[key] });
    }
    return arr;
};
