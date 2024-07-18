//1.Array creation and access

const arr = [1, 2, 3, 4, 5];
console.log(arr);

const firstElement = arr[0];
const lastElement = arr[4];
console.log(`first element: ${firstElement}, last element: ${lastElement}`);

//Array methods - basics
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

//shift method removes the first element and returns it
let firstItem = arr.shift();
console.log(firstItem);

console.log(arr);

//unshift() add new item at the begining and retuns its length
let newItem = arr.unshift(0, 1); 
console.log(newItem);

console.log(arr);

//Array methods - Intermediate

const newArray = arr.map((e) => { //returns a value that will be mapped to the new array
    e *= 2;
    return e;
})
console.log(`arr: ${arr}`);
console.log(`newArray: ${newArray}`);

// Return true to keep the element, false otherwise (return boolean value)
const arrayFiltered = arr.filter((e) => {
    return e%2 === 0;
})
console.log(`arr: ${arr}`);
console.log(`arrayFiltered: ${arrayFiltered}`);

const sum = arr.reduce( function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(sum);

//Array Iteration
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(function(ele, ind){
    console.log(`${ind}: ${ele}`);
})

//Multi - dimentional array
const multiArray = [
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12]
                   ]
multiArray.forEach(row => {
    row.forEach(element => {
        console.log(element);
    });
});