import {transform} from '../src/romanizer';

describe('romanizer', () => {
    it('should transform', () => {
        const actual = transform(10);
        expect(actual).toEqual('X');
    })
})