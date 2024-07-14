//Arithematic operators
//14-07-2024 Nikhil

function add(a, b){
    return a+b;
}
console.log(add(4, 3));

function subtract(a, b){
    return(a-b);
}
console.log(subtract(5,8));

function multiply(a, b){
    return(a*b);
}
console.log(multiply(7, 9));

function div(a, b){
    return(a/b);
}
console.log(div(3, 6));

function rem(a, b){
    return(a%b);
}
console.log(rem(8, 3));

let x = 5;
x += 4;
console.log(x);

x -= 2;
console.log(x);

let y = 4;
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log( x >= y);
console.log( x == y);
console.log(x === y);

console.log(x > 0 && y > 0);
console.log( x < 0 || y > 0);
console.log(!(x==y));

console.log( x > 0 ? console.log('+ve') : console.log('-ve') );
