const regularUser = {
    email:"purnesh@gmail.com",
    fullname : {
        firstName : "Purnesh",
        lastName : "Kalavagunta"
    }
}

//console.log(regularUser);
console.log(regularUser.fullname.lastName);



const obj1 = {1 : "a",  2: "b"};
const obj2 = {3 : "c", 4 : "d"};
const obj3 = Object.assign(obj1, obj2);
const obj4 = {obj1, obj2};
console.log(obj3);
console.log(obj4);