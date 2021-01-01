import { DecisionTable, any } from './src/DecisionTable';

const n = 9;

const isDivisibleN = (n: number, d: number): boolean => {
    return n % d === 0
};
const isDivisible3 = (n: number): boolean => isDivisibleN(n, 3);
const isDivisible5 = (n: number): boolean => isDivisibleN(n, 5); 

for (let i=1; i<100; ++i) {
    const print = (str: string) => () => console.log(str);
    DecisionTable.do(
        [isDivisible5(i), isDivisible3(i),                  ],
        [false,           false,           print(`${ i }`)  ],
        [false,           true,            print('fizz')    ],
        [true,            false,           print(`buzz`)    ],
        [true,            any,             print('fizzbuzz')],
    );
}