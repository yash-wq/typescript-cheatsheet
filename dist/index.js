"use strict";
let id = 5;
let company = "yash";
let ispub = true;
let x = "Hello";
let age;
age = 20;
x = true;
//array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Yash"];
//tuple
let person = [1, "yash", true];
//tuple array
let employee;
employee = [
    [1, 'Yash'],
    [2, 'Anand'],
    [3, 'Mahesh'],
];
//Union
let pid;
pid = 22;
pid = '22';
//enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "yash"
};
//Type assertion
let cid = 1;
let customerId = cid;
//OR
let customerId2 = cid;
//Type assertion lets you use a variable and alter the datatype that it accepts.
//Function
function addnum(x, y) {
    return x + y;
}
//Void type
function log(message) {
    console.log(message);
}
let user3 = {
    username: "Yashh",
    userid: 2
};
const add = (x, y) => x + y;
const subt = (x, y) => x - y;
//Classes
class Person {
    //these vars above can be public, private or protected
    //by default it is public
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const yash = new Person(1, 'Yash Vishwakarma');
console.log(yash.register());
//You can also implement interface in class
