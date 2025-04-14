import { intersection } from './solution.js';

describe('intersection', () => {
    it('returns values that are in both arrays', () => {
        expect(intersection([2, 1], [2, 3])).toEqual([2]);
    });

    it('does not include duplicate values in the result', () => {
        expect(intersection([2, 1, 2], [2, 3])).toEqual([2]);
    });

    it('preserves the order from the first array', () => {
        expect(intersection([3, 2, 1], [1, 2, 3])).toEqual([3, 2, 1]);
    });

    it('returns an empty array when there is no intersection', () => {
        expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    it('returns an empty array when the first array is empty', () => {
        expect(intersection([], [1, 2, 3])).toEqual([]);
    });

    it('returns an empty array when the second array is empty', () => {
        expect(intersection([1, 2, 3], [])).toEqual([]);
    });

    it('returns an empty array when both arrays are empty', () => {
        expect(intersection([], [])).toEqual([]);
    });

    it('works with mixed data types', () => {
        expect(intersection([1, 'a', true], ['a', false, true])).toEqual([
            'a',
            true,
        ]);
    });
});
