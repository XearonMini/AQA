
class Calculator {
    constructor() {
    };
    add(...theArgs) {
        let result = 0;
        for (let i = 0; i < theArgs.length; i++) {
            result += theArgs[i];
        }

        return result;
    };

    multiply(...theArgs) {
        let result = 1;
        for (let i = 0; i < theArgs.length; i++) {
            result = result * theArgs[i];
        }
        return result;
    };

    subtraction(reduced, subtrahend) {
        return reduced - subtrahend;
    }

    divide(dividend, divider) {
        return dividend / divider;
    }

    exponentiation(number) {
        return number * number;
    }
    sqrt(number) {
        return Math.sqrt(number);
    }
};

module.exports = Calculator;