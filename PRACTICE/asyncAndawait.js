// it is used for writing promises more easily and efficiently

// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

function cricketPromise(msg) {
  return new Promise((resolve, reject) => {
    if (msg == "google") {
      resolve("will play google");
    } else {
      reject("you are not google");
    }
  });
}

function processPromise(res) {
  return new Promise((resolve) => {
    resolve(res);
  });
}

// nested promise

cricketPromise("google").then(msg => {
    console.log(`it is from cricketPromise - ${msg}`);
    return processPromise(msg);
}).then(res => console.log(`this is from processPromise - ${res}`))
.catch(err => console.log(err));

// above process write effective in async/await

async function doCheck() {
  try {
    const cricket = await cricketPromise("google");
    console.log("from cricketPromise - " + cricket);
    const process = await processPromise(cricket);
    console.log(`from processPromise - ${process}`);
  } catch (err) {
    console.log(err);
  }
}

doCheck();
