     //In TypeScript, a tuple is an ordered array-like data structure that allows specifying the types and order of its elements.
 // Tuple variables
let user: [string, boolean, number] = ["345", true, 34]; // This is correct if the types match.

// Arrays
type UserAdmin = [number, string];
let newuseradmin: UserAdmin = [34, "45"];
newuseradmin[0] = 45;
newuseradmin[1] = "samanvith";

// To add an element, you should use an array, not a tuple.
let userAdminArray: string[] = ["45"];
userAdminArray.push("newUser");

  
