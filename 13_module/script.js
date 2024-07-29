//Modules
//1. Creating and Exporting modules
//Create a module that exports a function to add two numbers. Import and use module in another script.

import {addition} from './utility.js';

const result = addition(2, 4);
console.log(result);

//Create a module that exports an object representing a person with properties and methods. Import use this module in another script

import person from './utility.js';

person.greet();
person.increaseAge();
person.greet();

//2.Names and Default Exports
//Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import { add, sub, mul, div} from './utility.js';

const a = 2, b = 4;

add(a, b);
sub(a, b);
mul(a, b);
div(a, b);

//3.Importing Entire Modules
//create a module that exports multiple constants and functions. Import the entire module as an object in another script and uae its properties.

import * as utility2 from './utility2.js';

console.log(utility2.PI);
console.log(utility2.E);

//4. Using Thing-Party Modules 
//Install a third-party module (eg. loadash) using npm. Import and use a function from this module in a script.

//Install a third-party module (eg- axios) using npm. Import and use this module to make a network request in a script.

//5.Module Bundling (optional)
//Use a module bundler like webpack or Parcel to bundle multiple Javascript files int a single file. Write a script to demonstrate the bundlling process.




