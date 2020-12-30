import { assert } from 'chai';
import 'mocha';

import { DecisionTable, any } from '../src/DecisionTable';

describe('DecisionTable', () => {
    describe('testCell', () => {
        it('When input is equal to target, should return true', () => {
            const testCases = [
                { input: true,      },
                { input: false,     },
                { input: 'hey',     },
                { input: 123,       },
                { input: null,      },
                { input: undefined, },
            ];

            testCases.forEach(({ input }) => {    
                const result = DecisionTable.testCell(input, input);
    
                assert.strictEqual(result, true);
            });
        });

        it('When input is not equal to target, should return false', () => {
            const testCases = [
                { input: true,      target: false     },
                { input: 'aye',     target: 'nay'     },
                { input: 111,       target: 999       },
                { input: true,      target: 123       },
                { input: null,      target: undefined },
                { input: undefined, target: null      },
            ];

            testCases.forEach(({ input, target }) => {    
                const result = DecisionTable.testCell(input, target);
    
                assert.strictEqual(result, false);
            });
        });

        it('When target is any, should return true', () => {
            const testCases = [
                { input: true },
                { input: 'aye' },
                { input: 123 },
                { input: null },
                { input: undefined },
            ];

            testCases.forEach(({ input }) => {
                const result = DecisionTable.testCell(input, any);

                assert.strictEqual(result, true);
            });
        });
    });

    describe('testRow', () => {
        it('When all conditions match, should return true', () => {
            const testCases = [
                { input: [true, false]        },
                { input: ['hello', 'world']   },
                { input: [null, undefined]    },
                { input: [123, 'onetwothree'] },
            ];

            testCases.forEach(({ input }) => {
                const result = DecisionTable.testRow(input, input);

                assert.strictEqual(result, true);
            });
        });

        it('When input and target are both empty, should return true', () => {
            const input: boolean[] = [];
            const target: boolean[] = [];

            const result = DecisionTable.testRow(input, target);

            assert.strictEqual(result, true);
        });


        it('When some conditions do not match, should return false', () => {
            const input = [true, true];
            const target = [true, false];
            
            const result = DecisionTable.testRow(input, target);

            assert.strictEqual(result, false);
        });

        it('If input is shorter than target, should throw', () => {
            const input = [true, true];
            const target = [true, true, true];

            assert.throws(() => DecisionTable.testRow(input, target));
        });

        it('If input is longer than target, should throw', () => {
            const input = [true, true, true];
            const target = [true, true];

            assert.throws(() => DecisionTable.testRow(input, target));
        });
    });

    describe('testTable', () => {
        it('When there is one matching row, should return its index', () => {
            const input = [true, false];
            const targets = [
                [ false, false ],
                [ false, true  ],
                [ true,  false ],
                [ true,  true  ],
            ];
            
            const result = DecisionTable.testTable(input, ...targets);

            assert.strictEqual(result, 2);
        });

        it('When there is more than one matching row, should return the index of the first', () => {
            const input = [true, false];
            const targets = [
                [ false, false ],
                [ true,  false ],
                [ any,   false ],
                [ any,   any   ]
            ];
            
            const result = DecisionTable.testTable(input, ...targets);

            assert.strictEqual(result, 1);
        });

        it('When there are no matching rows, should return -1', () => {
            const input = [true, false];
            const targets = [
                [ false, false ],
                [ true,  true  ]
            ];
            
            const result = DecisionTable.testTable(input, ...targets);

            assert.strictEqual(result, -1);
        });
    });
});

