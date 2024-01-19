const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums);

const result = [];

newNums.forEach((num) => {
  if (num > 6) {
    result.push(num);
  }
});

console.log(result);
