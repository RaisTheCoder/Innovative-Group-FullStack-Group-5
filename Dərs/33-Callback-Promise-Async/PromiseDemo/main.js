let owo;

const promise1 = new Promise((resolve, reject) => {
  if (owo != undefined) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });

console.log(promise1);
