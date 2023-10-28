//Object Definition
const user = {
    name: "samanvith",
    email: "sam@56gmail.com",
    isactive: true,
};
//Function Definition

function createuser({ name, email, isactive }: { name: string, email: string, isactive: boolean }) {
    
}
//Object Creation and Usage:
let newuser = {
    name: "samanvith",
    email: "samanvith33@gmail.com",
    mobileno: 19289323, // Added mobileno property
    isactive: true,
};
//Function Call:
createuser(newuser);
// This example demonstrates how to create a function that returns an object with specified properties and types.
function createPerson(name: string, age: number): { name: string, age: number } {
    return {
        name: "samanvith",
        age: 21
    };
}
//  an example of a type alias in TypeScript, which helps define and enforce the structure of objects used within your code.
 type user ={
    name: string,
    emailid:string,
    ispaid:boolean
 }
  function deleteuser(user:user){}
   deleteuser({name:" ",emailid:"",ispaid:true})

export {};
