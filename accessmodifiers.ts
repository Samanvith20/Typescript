class User {
    // private keyword
    private _classstudent: number = 2;
    //protected keyword
    protected rollno:number=55
    readonly user_id: string = "samanvith";
      // public keyword
    constructor(public email: string, public name: number) {
    }

    get classstudent(): number {
        return this._classstudent;
    }
    // setter cannot have a return type
     set classstudent(countnumber){
       if(countnumber<=2){
         throw Error("count number should be less than (or) equal to 2")
       }
      this.classstudent=countnumber
     }
}
  // differnce between the protected and private is the private can be accessable only in the given class but protected can be accessible in the given class and also an inheritance class
 class admin extends User {
     isinheritance:boolean=true
      changerollno(){
       this.rollno=45
      }
      //_classstudent()
       
 }

export default User;
