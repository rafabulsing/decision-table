import { DecisionTable, any } from '../src/DecisionTable';

const isDivisible3 = (n: number): boolean => n % 3 === 0;
const isDivisible5 = (n: number): boolean => n % 5 === 0; 

for (let i=1; i<=100; ++i) {
    const result = DecisionTable.set(
        [ isDivisible5(i), isDivisible3(i),            ],
        [ false,           false,           `${ i }`   ],
        [ false,           true,            'fizz'     ],
        [ true,            false,           'buzz'     ],
        [ true,            true,            'fizzbuzz' ],
    );

    console.log(result);
}