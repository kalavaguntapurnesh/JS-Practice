//datatypes: 1) Primitive(Built-in) 2)Non-Primitive
//Primitive: Boolean, String, Null, Undefined, BigInt, Number, Symbol
//Non-Primitve: Object, Array, Function

let a = 20;
console.log(typeof(a));

let b = "Purnesh";
console.log(typeof(b));

//console.log("Value of c " + typeof(c));

let d = false;
console.log(typeof(d));

let e = 22222222222222222222222222222222n;
console.log(typeof(e));

let f = Symbol("Hello");
console.log(typeof(f));


let g = null;
console.log(typeof(g));


let myDetails = [22, "Purnesh", "purnesh@gmail.com"];

console.log(typeof(myDetails));

let myDetailOne = {
    name: "Purnesh",
    email : "purnesh2002@outlook.com"
}

console.log(typeof(myDetailOne));