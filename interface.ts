// In TypeScript, an interface defines a contract specifying the structure and types of properties and methods that objects must adhere to.
interface user{
  name:string;
  email:string;
  googleId?:number;
  starttrail:()=>string;
  //starttrail():string
 getcoupon(couponmane:string,couponId:number):string

}
 // interface can reopen
 interface user{
    readonly _userid:number
 }
 // it can extends(or)inherit
  interface admin extends user {
     githubtoken:string
  }

let newUser :admin ={name:"samanvith",email:"samavith55@gmail.com",
starttrail:()=>{
    return "hello"
},
getcoupon:(name:"Dusshera50",couponId:50)=>{
    return "offer"
},
_userid:44,githubtoken:"github"
}
  // difference  between the interface and type alilas
  // “One difference is, that interfaces create a new name that is used everywhere. Type aliases don't create a new name
  //  interfaces are open and type aliases are closed. This means you can extend an interface by declaring it a second time. // In the other case a type cannot be changed outside of its declaration.
 export default{}