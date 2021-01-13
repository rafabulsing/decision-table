import { DecisionTable, any } from '../src/DecisionTable';

const isDivisible3 = (n: number): boolean => n % 3 === 0;
const isDivisible5 = (n: number): boolean => n % 5 === 0; 

for (let i=1; i<=100; ++i) {
    const print = (str: string) => () => console.log(str);
    DecisionTable.do(
        [isDivisible5(i), isDivisible3(i),                  ],
        [false,           false,           print(`${ i }`)  ],
        [false,           true,            print('fizz')    ],
        [true,            false,           print(`buzz`)    ],
        [true,            true,            print('fizzbuzz')],
    );
}