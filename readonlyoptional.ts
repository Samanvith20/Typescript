type Person = {
   readonly _id:string;
    name: string;
    age: number;
     email: string;
    phone?: string;     // optional
};

// Create a person object
const john: Person = {
    _id:"234567",
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    
    // phone property is optional, so it can be omitted.
};
john.email="johu253@gmail.com"
//john._id=""  Here we cannot access this beacause it is readonly method