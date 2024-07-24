//Error Handling
//1.Basic error handling with Try-Catch

//write a function that intentionally throws an error and use a try catch block to handle the error and log an appropriate message to the console

function throwErrorFunction() {
    throw new Error("1.This is an intentional error.");
}

try {
    throwErrorFunction();
} catch (error) {
    console.error("1.An error occured: ", error.message);
}

//Create a function that divides two numbers and throws an error if the denominator is zero
function divide(a, b) {
    if (b === 0) {
        throw new Error("Denominator is zero!");
    } else {
        console.log(a / b);
    }
}

try {
    divide(4, 0);
} catch (error) {
    console.error("Error: ", error.message)
}

//2. Finally BLock
//Write a script that includes a try-catch block and finally block. Log messages in the try, catch and finally blocks the execution flow

// tryCatchFinally.js

function executeWithErrorHandling() {
    try {
        console.log("Entering the try block.");
        // Intentionally throw an error
        throw new Error("2.This is an intentional error.");
        console.log("This message will not be logged due to the error.");
    } catch (error) {
        console.log("Entering the catch block.");
        console.error("2.An error occurred:", error.message);
    } finally {
        console.log("Entering the finally block.");
        console.log("2.This block executes regardless of whether an error occurred or not.");
    }
}

executeWithErrorHandling();

//3. Custom Error Objects
//Create a custom error class that extends the build-in error calss. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error message.");
}

function executeWithCustomErrorHandling() {
    try {
        console.log("Entering the try block.");
        throwCustomError();
    } catch (error) {
        if (error instanceof CustomError) {
            console.log("Entering the catch block for CustomError.");
            console.error("3.A custom error occurred:", error.message);
        } else {
            console.log("Entering the catch block for general errors.");
            console.error("3.An error occurred:", error.message);
        }
    } finally {
        console.log("Entering the finally block.");
        console.log("3.This block executes regardless of whether an error occurred or not.");
    }
}

executeWithCustomErrorHandling();

//write a function that validates user input ( eg. checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    return true;
}

// Example usage
try {
    validateInput(""); // This will throw an error
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation Error: ${error.message}`);
    } else {
        console.error(`Unknown Error: ${error.message}`);
    }
}

// Example with valid input
try {
    validateInput("Valid input");
    console.log("Input is valid");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation Error: ${error.message}`);
    } else {
        console.error(`Unknown Error: ${error.message}`);
    }
}


//4. Error Handling in promises
//create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log and appropriate message to the console.

function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected with an error.");
        }
    });
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });

//Use try-catch function to handle errors from a promise that randomly resolves or rejects, and log the error message

async function handleRandomPromise() {
    try {
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

handleRandomPromise();

//5.Graceful Error handling
//Use the fetch API to request data from an invalild URL and handle the error using .catch(). Log an appropriate error message to the console

const invalidUrl = "https://invalid-url.example.com/data";

function fetchData(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw MongoNetworkError(`Network response is not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(`Fetch error: ${error.message}`);
        });
}
fetchData(invalidUrl);

async function handleInvalidUrl() {
    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data fetched successfully:", data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}
handleInvalidUrl();