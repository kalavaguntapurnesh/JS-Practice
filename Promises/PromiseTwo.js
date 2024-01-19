const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("TimeOut is going on");
    resolve({ username: "Purnesh", email: "purnesh@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
