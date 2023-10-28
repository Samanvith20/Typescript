"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Object Definition
var user = {
    name: "samanvith",
    email: "sam@56gmail.com",
    isactive: true,
};
//Function Definition
function createuser(_a) {
    var name = _a.name, email = _a.email, isactive = _a.isactive;
}
//Object Creation and Usage:
var newuser = {
    name: "samanvith",
    email: "samanvith33@gmail.com",
    mobileno: 19289323,
    isactive: true,
};
//Function Call:
createuser(newuser);
// This example demonstrates how to create a function that returns an object with specified properties and types.
function createPerson(name, age) {
    return {
        name: "samanvith",
        age: 21
    };
}
function deleteuser(user) { }
deleteuser({ name: " ", emailid: "", ispaid: true });
