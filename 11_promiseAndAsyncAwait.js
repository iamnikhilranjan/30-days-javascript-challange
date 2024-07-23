//Promises and Async/await 

//1.Understanding Promises
//create a promise that resolves with a message after a 2-second  timeout and log the message to the console

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is a message after a 2-secoond timeout");
    }, 2000);
});

promise.then(message => {
    console.log(message);
});

//create a promise that rejects with an error message after a 2-second timeout and handle error using catch
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is an error message after a 2-sec timeout");
    }, 2000);
});

//Handle the error using catch
promise2.catch(error => {
    console.log(error);
});

//2. Chaning Promises
//create a a sequence of promises that simulate fetching data from a server. chain the promises to log in a specific order
function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

fetchData("Fetching data from server 1...", 1000)
    .then((message1) => {
        console.log(message1);
        return fetchData("Fetching data from server 2...", 2000);
    })
    .then((message2) => {
        console.log(message2);
        return fetchData("Fetching data from server 3...", 3000);
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


//3. Using Async/Await
//Write an async function that waits for a promise to resolve and then logs the resolved value.

// Function that returns a promise that resolves after a delay
function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// Async function that waits for the promise to resolve and logs the resolved value
async function logResolvedValue() {
    try {
        const message = await fetchData("This is the resolved value after a delay", 2000);
        console.log(message);
    } catch (error) {
        console.error("Error:", error);
    }
}

logResolvedValue();

//async function that handles a rejected promise using try-catch and logs the error message

function fetchDataWithError(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(message));
        }, delay);
    });
}

async function handleRejectedPromise() {
    try {
        const message = await fetchDataWithError("This is an error message after a delay", 2000);
        console.log(message);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

handleRejectedPromise();

//4. Fetching Data from an API
//Use the fetch API to get data from a public API and log the response data to the console using promises

// Function to fetch data from a public API
function fetchDataFromAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


 // Async function to fetch data from a public API and log the response
async function fetchDataFromAPI2() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'; 

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchDataFromAPI2();

//Concurrent Promises
//Use Promise.all to wait for multiple promises to resolve and then log all their values
function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

async function logAllResolvedValues() {
    const promise1 = fetchData("Data from server 1", 1000);
    const promise2 = fetchData("Data from server 2", 2000);
    const promise3 = fetchData("Data from server 3", 3000);

    try {
        const results = await Promise.all([promise1, promise2, promise3]);
        console.log(results);
    } catch (error) {
        console.error("Error:", error);
    }
}

logAllResolvedValues();

//Promise.race to log the value of the first promise that resolves among multiple promises

function createPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

const p1 = createPromise("Promise 1 resolved", 1000);
const p2 = createPromise("Promise 2 resolved", 2000);
const p3 = createPromise("Promise 3 resolved", 3000);

Promise.race([p1, p2, p3])
    .then((value) => {
        console.log("First resolved value:", value);
    })
    .catch((error) => {
        console.error("Error:", error);
    });




