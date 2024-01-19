const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Purnesh", email: "Purnesh@gmail.com" });
    } else {
      reject("Error happened");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFour;
    console.log(response);
  } catch (error) {
    console.log("Inside the catch block");
    console.log(error);
  }
}

consumePromiseFive();
