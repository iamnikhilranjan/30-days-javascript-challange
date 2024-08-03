//1.Understanding Closures
//Write a function that returns another function, where the inner function accessses a variable from the outer function's scope. Call inner function and log the result.

function ftn1(){
    const data = 90;
    function ftn2(){
       console.log(`data is : ${data}`)
    }
    return ftn2;
}
const result = ftn1();
result();

//Create a closure that maintains a private counter. Implement functions to increament and get the current value of the counter.

function createCounter(){
    let counter = 0;
    return{
        increment: function(){
            counter++;
        },
        getValue: function(){
            return counter;
        }
    };
}

const myCounter = createCounter();

myCounter.increment();
myCounter.increment();

console.log(myCounter.getValue());

//2. Practical Closures
//Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call

function createUniqueIdGenerator(){
    let lastId = 0;

    return function(){
        lastId++;
        return lastId;
    };
}

const generateUniqueId = createUniqueIdGenerator();

console.log(generateUniqueId());
console.log(generateUniqueId());
console.log(generateUniqueId());
console.log(generateUniqueId());

//Create a closure that captures a user's name and return a function that greets the user by name

function greetPerson(){
    const name = "Robinhood";
    function greet(){
        console.log(`Hello ${name}!`);
    }
    return greet;
}

const person = greetPerson();
person();

//3. Closures in loops
//write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray(size) {
    const functions = [];

    for (let i = 0; i < size; i++) {
        functions[i] = (function(index) {
            return function() {
                console.log(index);
            };
        })(i);
    }

    return functions;
}

const functionArray = createFunctionArray(5);

functionArray[0](); 
functionArray[1](); 
functionArray[2](); 
functionArray[3](); 
functionArray[4](); 

//4. Module Pattern

//Use closures to create a simple module for managing a collection of items. Implement methods add, remove, and list items.

function createItemManager() {
    let items = []; 

    return {
        add: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
        remove: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        list: function() {
            console.log("Items:", items);
        }
    };
}

const itemManager = createItemManager();

itemManager.add("Apple");
itemManager.add("Banana");

itemManager.list(); 
itemManager.remove("Apple");

itemManager.list(); 

//5. Memorizatiion
//Write a function that memorize the result of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {}; 
    return function(...args) {
        const key = JSON.stringify(args); 
        if (cache[key]) {
            console.log('Fetching from cache:', key);
            return cache[key];
        } else {
            console.log('Calculating result for:', key);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(3, 4)); 
console.log(memoizedAdd(3, 4)); 

//create a memoized versiion of a function that calculates the factorial of a number

function memoize(fn) {
    const cache = {}; 

    return function(...args) {
        const key = JSON.stringify(args); 
        if (cache[key]) {
            console.log('Fetching from cache:', key);
            return cache[key];
        } else {
            console.log('Calculating result for:', key);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(7)); 
console.log(memoizedFactorial(6));


