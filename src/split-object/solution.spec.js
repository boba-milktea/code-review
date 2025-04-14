import { splitObject } from './solution.js';

describe('splits an object', () => {
    it('splits an object with multiple key/value pairs', () => {
        const input = { a: 1, b: 2, c: 3 };
        const expected = [{ a: 1 }, { b: 2 }, { c: 3 }];
        expect(splitObject(input)).toEqual(expected);
    });

    it('splits an object with different types of values', () => {
        const input = { name: 'robs', age: 25, tall: true, userName: 'sbor' };
        const expected = [
            { name: 'robs' },
            { age: 25 },
            { tall: true },
            { userName: 'sbor' },
        ];
        expect(splitObject(input)).toEqual(expected);
    });

    it('returns an empty array when input is an empty object', () => {
        expect(splitObject({})).toEqual([]);
    });

    it('does not mutate the original object', () => {
        const original = { x: 10, y: 20 };
        const copy = { ...original };
        splitObject(original);
        expect(original).toEqual(copy);
    });

    it('returns one object in array if input has only one key/value pair', () => {
        expect(splitObject({ key: 'value' })).toEqual([{ key: 'value' }]);
    });
});
