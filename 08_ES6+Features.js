//ES6+Features (20-July-2024) @iamnikhilranjan

//1. Tempelate Literals
const name = 'Sakura';
const country = 'Japan';
const message = `Her name is ${name}, she is from ${country}.`;
console.log(message);

const str = `The sky is grey, and the land is green,
             Birds are singing, and calves are dancing.
             A masterpiece beyond any artist's dream—
             Every day, nature's best, like never before seen.`;
console.log(str);

//2.Destructuring
const numbers = [1, 2, 3, 4, 5];

const[first, second] = numbers;

console.log(first);
console.log(second);

console.log(numbers);

const book = {
    Title: 'Atomic habits',
    Author: 'James Clear',
    Price: 300
};

const {Title, Author} = book;
console.log(Title);
console.log(Author);

//3.Spread and Rest Operator
const arr = [3, 4, 6, 3, 9];
const newArr = [...arr, 90, 50];
console.log(newArr);

function sum(...nums){
    return nums.reduce((acc, num) => acc + num, 0);
}

const nums = [3, 5, 3, 2, 6, 7];
console.log(sum(...nums));

//4.Default Parameters
const product = function(a, b = 1){
    result = a * b;
    return result;
}

console.log(product(2, 3));
console.log(product(2));

//5.Enhances Object Literals

const person = {
    name: 'Robinhood',
    age: 21,

    greet(){
        console.log('Hello');
    }
}
console.log(person);

const cityKey = 'city';
const stateKey = 'state';

const details = {  //computed property names.
  [cityKey]: 'Mumbai',
  [stateKey]: 'Maharashtra'
};

console.log(details);



