// Asynchronous JavaScript allows you to execute code without waiting
// for the completion of time-consuming tasks. Instead of blocking the main thread,
// these tasks are delegated to the browser's background processes,
// and once completed, a callback function is triggered to handle the result.

//How to Create a Promise - The Promise constructor takes a function as its argument,
// which has two parameters: resolve and reject
const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
        resolve("Promise is fulfilled!");
    } else {
        //reject with error is called when false
        reject("Promise failed!");
    }

})

function handleResolve(value) {
    console.log(value);
}

function handleReject(reason) {
    console.error(reason);
}

promise.then(handleResolve, handleReject);

///////----------------------------------------------------------------
//How to Consume Promises with .then() and .catch()
promise.then((result) => {
    console.log(result)  //success
})
    .catch((error) => {
        console.log(error)   //rejected
    })

//more error handling-----------------
function fetchData() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject(`Error fetching data: ${error.message}`);
        }
    });
}
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

//-------------Async/Await in JavaScript
//The async keyword is used to define an asynchronous function.
// This function always returns a Promise.

// The await keyword is used within the async function to pause its execution
// until the Promise is resolved.
// It allows you to work with Promises in a more synchronous manner.
async function fetchData() {
    try {
        // Simulating an asynchronous operation, like fetching data from an API
        //make an asynchronous request to a URL, and the function pauses until the request is complete.
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // Once the Promise is resolved, the code below will execute
        let data = await response.json();

        console.log('Data:', data);

        //If any error occurs during the asynchronous operations,
        // the catch block handles the error.
    } catch (error) {
        console.error('Error:', error);
    }
}

// Calling the async function
fetchData();

// Async/await doesn't have built-in support for setting a timeout on asynchronous operations.
// If you need to implement a timeout,
// you might need to use a combination of Promise.race() and setTimeout.