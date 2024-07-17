//1.Function declaration
function Check(x){
    return ( x%2 == 0 ? "even" : "odd");
}
console.log(Check(5));

function Square(x){
    return x * x;
}
console.log(`Square: ${Square(4)}`);

//2.Function Expression
function Maximum(a, b){
    return( a > b ? a : b);
}
console.log(`Maximum: ${Maximum(3, 5)}`);

function Concatenate( str1, str2){
    return str1 + str2;
}
console.log(Concatenate("Hello ", "World"));

//3.Arrow function
const Sum = (a, b) => {
 return (a+b);
}

const characterCheck = (str, c) => {
  const result = str.includes(c);
  return result;
}
let string = "Hello";
let c = "W";
console.log(characterCheck(string, c));

//4.Function parameters and default values
const Product= (num1, num2 = 4) => {
 return ( num1*num2);
}
console.log(`Product = ${Product(6)}`);
console.log(`Product = ${Product(6, 3)}`);

const Greet = (pname, age = 18) => {
    return ( age >= 18 ? `Hello ${pname} sir` : `Hello ${pname}`);
}
console.log(Greet('Nikhil'));
console.log(Greet('Rahul',17));

//5.High order functions
const highFunction = (times, operation) => {
    for( let i = 0 ; i < times ; i++){
        operation();
    }
};

const operation = () => {
    console.log("Hello World!");
}
highFunction(5, operation);

const fun1 = (x) => {
    return x * x ;
}
const fun2 = (x) => {
    return x * x * x ;
}

const task = (f1, f2, value) => {
    let result = f1(value);
    console.log(f2(result));
}

task(fun1, fun2, 2);