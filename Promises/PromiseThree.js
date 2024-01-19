const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Purnesh", password: "1226" });
    } else {
      reject("ERROR! SOMETHING WENT WRONG");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //this is called chaining
    console.log("Inside the Chaining");
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
    console.log("Inside the error");
  })
  .finally(function () {
    console.log("Finally is executed");
  });
