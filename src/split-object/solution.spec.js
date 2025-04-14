import { solutionName } from './solution.js';

describe('add two numbers', () => {
    it(' 1 + 2 -> 3', () => {
        expect(solutionName(1, 2)).toEqual(3);
    });
});
