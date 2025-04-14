import { deepFlat } from './solution.js';

describe('deep flat', () => {
    it('flattens a deeply nested array of numbers', () => {
        const input = [1, [2, [3, [4]], 5]];
        const output = [1, 2, 3, 4, 5];
        expect(deepFlat(input)).toEqual(output);
    });

    it('flattens a deeply nested array of strings', () => {
        const input = ['a', ['b', [['c'], ['d']], 'e']];
        const output = ['a', 'b', 'c', 'd', 'e'];
        expect(deepFlat(input)).toEqual(output);
    });

    it('returns an empty array when input is an empty array', () => {
        expect(deepFlat([])).toEqual([]);
    });

    it('returns an empty array when no argument is passed', () => {
        expect(deepFlat()).toEqual([]);
    });

    it('handles already flat arrays', () => {
        const input = [1, 2, 3];
        expect(deepFlat(input)).toEqual([1, 2, 3]);
    });

    it('handles mixed types', () => {
        const input = [1, ['a', [true, [null]]]];
        const output = [1, 'a', true, null];
        expect(deepFlat(input)).toEqual(output);
    });
});
