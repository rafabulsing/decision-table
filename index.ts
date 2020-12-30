import { DecisionTable } from './src/DecisionTable';

const n = 9;

const isDivisibleN = (n: number, d: number): boolean => {
    return n % d === 0
};
const isDivisible3 = (n: number): boolean => isDivisibleN(n, 3);
const isDivisible5 = (n: number): boolean => isDivisibleN(n, 5); 

for (let i=1; i<100; ++i) {
    console.log(DecisionTable.set(
        [isDivisible5(i), isDivisible3(i),           ],
        [false,           false,           `${ i }`  ],
        [false,           true,            'fizz'    ],
        [true,            false,           'buzz'    ],
        [true,            true,            'fizzbuzz'],
    ));
}