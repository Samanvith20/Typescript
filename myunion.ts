    // In TypeScript, "union" refers to a type that can hold values of multiple specified types.
// unions in variables
let score :string|number =55
score="69"
score =54
// unions in objects
type user={
    name:string,
    id:number

} 
type admin={
  username:string,
  userid:number
}
 let createaccount: user|admin={name:"samanvith",id:354}
 createaccount={username:"reddy",userid:541}
 // functions
   function createuser(id:string|number){
    if(typeof id==="string"){
       id.toLowerCase()
    }
    
   }
  createuser("5")
  createuser(46)
  //arrays
   const data1 :string[]= ["1","2","3"]
   const data2:number[]=[23,45,87]
   const data3:(string|number|boolean)[]=["1",34,true]
