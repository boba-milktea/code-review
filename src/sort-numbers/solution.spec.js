import { sortNumbers } from './solution.js';

describe('sort numbers from smallest to largest', () => {
    it('sorts positive and negative numbers correctly', () => {
        expect(sortNumbers([1.5, 1, -1.5, 0, -1])).toEqual([
            -1.5, -1, 0, 1, 1.5,
        ]);
    });

    it('returns an empty array if input is empty', () => {
        expect(sortNumbers([])).toEqual([]);
    });

    it('returns the same number if array has one item', () => {
        expect(sortNumbers([42])).toEqual([42]);
    });

    it('does not mutate the original array', () => {
        const original = [3, 1, 2];
        const copy = [...original];
        sortNumbers(original);
        expect(original).toEqual(copy);
    });

    it('sorts an already sorted array', () => {
        expect(sortNumbers([-2, 0, 1, 3])).toEqual([-2, 0, 1, 3]);
    });

    it('sorts a reverse-sorted array', () => {
        expect(sortNumbers([3, 2, 1, 0, -1])).toEqual([-1, 0, 1, 2, 3]);
    });

    it('handles duplicates correctly', () => {
        expect(sortNumbers([2, 1, 2, 1, 3])).toEqual([1, 1, 2, 2, 3]);
    });
    it('does not need to support NaN, Infinity, -Infinity', () => {
        const input = [1, NaN, 3, -Infinity, Infinity, 2];
        expect(() => sortNumbers(input)).not.toThrow();
    });
});
