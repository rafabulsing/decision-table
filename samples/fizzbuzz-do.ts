import { DecisionTable } from '../src/DecisionTable';

const isDivisible3 = (n: number): boolean => n % 3 === 0;
const isDivisible5 = (n: number): boolean => n % 5 === 0; 

const print = (str: string) => () => console.log(str);

for (let i=1; i<=100; ++i) {
    DecisionTable.do(
        [ isDivisible5(i), isDivisible3(i),                   ],
        [ false,           false,           print(`${ i }`)   ],
        [ false,           true,            print('fizz')     ],
        [ true,            false,           print('buzz')     ],
        [ true,            true,            print('fizzbuzz') ],
    );
}