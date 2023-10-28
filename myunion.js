// In TypeScript, "union" refers to a type that can hold values of multiple specified types.
// unions in variables
var score = 55;
score = "69";
score = 54;
var createaccount = { name: "samanvith", id: 354 };
createaccount = { username: "reddy", userid: 541 };
// functions
function createuser(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
createuser("5");
createuser(46);
//arrays
var data1 = ["1", "2", "3"];
var data2 = [23, 45, 87];
var data3 = ["1", 34, true];
