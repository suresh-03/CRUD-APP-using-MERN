// function passed as an argument to another function
// passed function is callback function

// NOTE :
// funciton1 call inside function2 body
// function1 body inside function2 call
// example - at line 42 and 43

// example for callback functions

function animal(dog, cat) {
  dog("puppy", 5);
  cat("tom", 4);
}

animal(
  (name, age) => console.log(name + " " + age),
  (name, age) => console.log(name + " " + age)
);

// promises using call back functions

let giveChocolate = false;

function promiseForGive(promiseDone, PromiseNotDone) {
  if (giveChocolate) {
    promiseDone("Chocolate is given");
  } else {
    PromiseNotDone("Chocolate is not given");
  }
}

promiseForGive(
  (msg) => console.log(msg),
  (err) => console.log(err)
);

// another way of writing callback

let arr = ["bat", "ball", "stump"];

// callback() called inside findBall()
// callback() body defined as parameter in findBall() call

function findBall(arr, callback) {
  arr.forEach((val) => {
    if (callback(val)) {
      console.log(val);
    }
  });
}

findBall(arr, (x) => x != "ball");
