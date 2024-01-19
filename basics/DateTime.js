let data = new Date();
console.log(data.toString());


let createdDate = new Date("14-01-2024");

let myTimeStamp = Date.now();

console.log(createdDate.getTime());
console.log(Math.floor(myTimeStamp / 1000));



let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
