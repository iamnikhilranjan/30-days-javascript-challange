export function addition(a, b) {
    return a + b;
}

const person = {
    name: 'robinhood',
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    },
    increaseAge() {
        this.age += 1;
    }
};

export default person;

export function add(a, b) {
    console.log(a + b);
}
export function sub(a, b) {
    console.log(a - b);
}
export function mul(a, b) {
    console.log(a * b);
}
export function div(a, b) {
    if (b == 0) {
        throw new Error("cannot divide by zero. ");
    }
    return a / b;
}


