const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task like DB Calls, API
  setTimeout(function () {
    console.log("Async Task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});
