export class DecisionTable {
    static testCell<T>(input: T, target: T|Any): boolean {
        if (target === any) {
            return true;
        }
        return input === target;
    }
    
    static testRow<T extends readonly unknown[]>(input: T, target: T): boolean {
        if (input.length != target.length) {
            throw new Error('Input and target lengths must be the same.');
        }
        for (let i=0; i<input.length; ++i) {
            if (!DecisionTable.testCell(input[i], target[i])) {
                return false;
            }
        }
        return true;
    }

    static testTable<T extends readonly unknown[]>(input: T, ...targets: T[]): number {
        return targets.findIndex(target => DecisionTable.testRow(input, target));
    }

    static set<T extends readonly unknown[], U>(input: T, ...statements: [...T, U][]): U|undefined {
        const targets = statements.map(statement => statement.slice(0, -1) as unknown as T);
        
        const matchingRowIndex = DecisionTable.testTable<T>(input, ...targets);

        if (matchingRowIndex === -1) {
            return undefined;
        }

        return statements[matchingRowIndex].pop() as U;
    }

    static do<T extends readonly unknown[], U>(input: T, ...statements: [...T, () => U][]): U|undefined {
        const result = DecisionTable.set(input, ...statements);

        if (result === undefined) {
            return undefined
        }

        return result();
    }
}

class Any {}
export const any = new Any();
export const _ = new Any();