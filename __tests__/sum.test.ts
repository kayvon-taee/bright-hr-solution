import {expect, it, describe} from '@jest/globals';
import {mockFunction} from "../src/mockFunction";


describe('setup suite',() => {
    it('adds 1 + 2 to equal 3', () => {
        expect(mockFunction(1,2)).toBe(3);
    });
})