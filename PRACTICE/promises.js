// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is a JavaScript object that links producing code and consuming code

let age = 12;

// promise "PRODUCING CODE"
const promise = new Promise((resolve,reject) => {
    if(age >= 18){
        resolve("eligible to vote");
    }
    else{
        reject("not eligible to vote");
    }
});

// another way of writing promise
function promiseAnother(message){
    return new Promise((resolve,reject) => {
        if(message){
            resolve("true");
        }
        else{
            reject("false");
        }
    });
}

function promiseAnother1(message){
    return new Promise((resolve,reject) => {
        if(message){
            resolve("true");
        }
        else{
            reject("false");
        }
    });
}


// Promise "CONSUMING CODE"

// store all promises in array
// only with resolve
Promise.all([
    promiseAnother(true),
    promiseAnother1(true)
]).then(msg => console.log(msg))

promiseAnother(false).then(msg => console.log(msg)).catch(err => console.log(err));


promise.then(message => console.log(message)).catch(error => console.log(error));