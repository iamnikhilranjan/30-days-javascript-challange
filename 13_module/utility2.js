export const PI = 3.14159;
export const E = 2.71828;

export function addNum(a, b){
    return a+b;
}

export function subNum(a, b){
    return a - b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

