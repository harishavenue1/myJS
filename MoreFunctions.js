a(); // prints log
b(); // b is not a function, this is diff between func stmt and func exp

// Function Statement or // Function Declaration

function a() {
    console.log("a called");
}
a();

//--------------------------------------------------------------------------------------

// Function Expression

var b = function () {
    console.log("b called");
}
b();

//--------------------------------------------------------------------------------------

// Anonymous Function
// function () {
//     console.log("b called");
// }

//--------------------------------------------------------------------------------------

// Named Function Expression
var b1 = function abc() {
    console.log("b1 called");
}
b1();
// abc() -> abc is not defined
// because abc is created under global scope
// if need to access, it needs to accessed only via b1

//--------------------------------------------------------------------------------------

// Difference between Parameters and Arguments
var b2 = function (param1, param2) { // this is parameters
    console.log("b2 called");
}
b2(1, 2); // this is arguments

//--------------------------------------------------------------------------------------

// First Class Functions
// Ability of functions 
// a) to use functions as values
// b) and passed functions as an arguments to others functions
// c) return function

var b3 = function (param1) {    // received params as functions
    return function xyz() {     // return functions

    }
}
function fn() {

}
console.log(b3(fn));            // sending functions as arguments

//--------------------------------------------------------------------------------------

// Arrow Functions
an = () => {

}