console.log(b); // undefined

// temporal dead zone, you cant access until initialized, though declared in zone
// console.log(a); // unable to access 'a' before initialization - Uncaught ReferenceError

// undeclared
// console.log(x); // x is not defined - Uncaught ReferenceError

let a = 10;     // memory allocated under - script
var b = 100;    // memory allocated under - global

// let is strict

// let a = 100; // Uncaught SyntaxError: Identifier 'a' has already been declared
// var a = 100; // Uncaught SyntaxError: Identifier 'a' has already been declared

// const is even more strict than let
let c1 = 1;
c1 = 10;
console.log(c1); // works fine for let

let c2;
c2 = 10;
console.log(c2); // works fine for let

// const c2;       // 'const' declarations must be initialized.
// c2 = 100;       // Uncaught SyntaxError: Missing initializer in const declaration

const c3 = 100;
c3 = 1000;         // Uncaught TypeError: Assignment to constant variable
