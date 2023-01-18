import { assert } from 'chai';
import 'mocha';

import { last } from '../src/utils';

describe('last', () => {
    it('When array length is larger than 0, should return last element', () => {
        const input = ["hello", "there"];

        const result = last(input)

        assert.strictEqual(result, "there");
    });

    it('When array length is equal to 0, should return undefined', () => {
        const input = Array(0);

        const result = last(input);

        assert.strictEqual(result, undefined);
    });
});
