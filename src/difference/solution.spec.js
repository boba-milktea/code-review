import { difference } from './solution.js';

describe('return the difference', () => {
    it('returns values from the first array not present in the second array', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });

    it('removes all occurrences of values found in the second array', () => {
        expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
    });

    it('returns the first array as-is if the second array is empty', () => {
        expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    it('returns an empty array if the first array is empty', () => {
        expect(difference([], [1, 2, 3])).toEqual([]);
    });

    it('returns an empty array if both arrays are empty', () => {
        expect(difference([], [])).toEqual([]);
    });

    it('preserves the order of elements from the first array', () => {
        expect(difference([3, 2, 1], [2])).toEqual([3, 1]);
    });

    it('removes repeated values correctly and keeps only the first occurrence in result', () => {
        expect(difference([1, 1, 2, 2, 3], [2])).toEqual([1, 3]);
    });

    it("returns unique results according to the first array's structure and order", () => {
        expect(difference([4, 2, 4, 3, 1], [2, 3])).toEqual([4, 1]);
    });
});
