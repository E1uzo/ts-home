function doubleFactorial(n: any): number {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error("Ошибка: Аргумент должен быть числом.");
    }
    if (n < 0) {
        throw new Error("Ошибка: Число не должно быть отрицательным.");
    }
    let result = 1;
    for (let i = n; i > 0; i -= 2) {
        result *= i;
    }
    return result;
}

try {
    console.log("Двойной факториал 5:", doubleFactorial(5));
    console.log("Двойной факториал 6:", doubleFactorial(6));
    console.log("Двойной факториал 0:", doubleFactorial(0));
} catch (e: any) {
    console.error(e.message);
}

function filterNumbers(...args: any[]): number[] {
    return args.filter(item => typeof item === 'number' && !isNaN(item));
}

console.log("Только числа:", filterNumbers(1, "hello", 2, true, 3, null, 4.5));

function calculate(arg1: any, arg2: any, arg3?: any): any {
    const performOp = (a: number, b: number, op: string): number => {
        if (op === '+') return a + b;
        if (op === '-') return a - b;
        if (op === '*') return a * b;
        if (op === '/') return b !== 0 ? a / b : 0;
        return 0;
    };

    if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'string') {
        return performOp(arg1, arg2, arg3);
    }

    if (Array.isArray(arg1) && Array.isArray(arg2)) {
        const results: number[] = [];
        const length = Math.min(arg1.length - 1, arg2.length);
        let currentResult = arg1[0];
        for (let i = 0; i < length; i++) {
            currentResult = performOp(currentResult, arg1[i + 1], arg2[i]);
            results.push(currentResult);
        }
        return results;
    }
}

console.log("Два числа (5 * 4):", calculate(5, 4, '*'));
console.log("Массивы чисел и знаков:", calculate([10, 5, 2], ['-', '*']));

const doubleFactorialArrow = (n: any): number => {
    if (typeof n !== 'number' || isNaN(n) || n < 0) throw new Error("Некорректный аргумент");
    let result = 1;
    for (let i = n; i > 0; i -= 2) result *= i;
    return result;
};

const filterNumbersArrow = (...args: any[]): number[] => {
    return args.filter(item => typeof item === 'number' && !isNaN(item));
};

const calculateArrow = (arg1: any, arg2: any, arg3?: any): any => {
    const performOp = (a: number, b: number, op: string): number => {
        if (op === '+') return a + b;
        if (op === '-') return a - b;
        if (op === '*') return a * b;
        if (op === '/') return b !== 0 ? a / b : 0;
        return 0;
    };

    if (typeof arg1 === 'number') {
        return performOp(arg1, arg2, arg3);
    }
    
    let current = arg1[0];
    return arg2.map((op: string, i: number) => {
        current = performOp(current, arg1[i + 1], op);
        return current;
    });
};

const testArray: number[] = [1, 2, 3, 4, 5];
const doubleFn = (x: number): number => x * 2;

const applyOperation = (arr: number[], operation: (num: number) => number): number[] => {
    const newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(operation(arr[i]));
    }
    return newArr;
};

const applyOperationWithMap = (arr: number[], operation: (num: number) => number): number[] => {
    return arr.map(operation);
};

console.log("Ручной цикл:", applyOperation(testArray, doubleFn));
console.log("Через метод .map():", applyOperationWithMap(testArray, doubleFn));
