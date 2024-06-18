// Lesson 1

    JavaScript is Synchronous SingleThreaded Language
    JavaScript is Loosely Typed Language (a = 10, a = "harish")

    Everything happens in Execution Context (Memory & Code Component)

// Lesson 2

    Execution starts with Global Execution context.
    JS Engine - CALL STACK starts with Global Execution context.
    This CALL STACK stores all the context created with order and pop() as and when the role is completed.
    This way Engine Executes the Flow.

// Lesson 3

    HOISTING
    --------
    https://www.youtube.com/watch?v=Fnlnw8uY6jo

    // NO ERROR

    getName();               -> Hi JS!
    console.log(x);          -> undefined

    var x = 7;

    function getName() {
      console.log("Hi JS!");
    }

// Lesson 4

    Functions
    ---------
    https://www.youtube.com/watch?v=gSDncyuGw0s

    see the difference in x

a) global and local x are different

    var x = 1;
    a();            // 10
    b();            // 100
    console.log(x); // 1

    function a() {
        var x = 10;
        console.log(x);
    }

    function b() {
        var x = 100;
        console.log(x);
    }

b) internal functions reUse main x

    var x = 1;
    a();            // 10
    b();            // 100
    console.log(x); // 100

    function a() {
        x = 10;
        console.log(x);
    }

    function b() {
        x = 100;
        console.log(x);
    }

// Lesson 5

    Shortest JS Prg - Empty JS File
    https://www.youtube.com/watch?v=QCRpVw2KXf8&t=493s

    JS Engine Creates below
    a) Global Context gets Created
    b) window Global Object gets Created
    c) this Keyword gets Created - refers to window Global Object

// Lesson 6

    Undefined vs Not Defined
    ------------------------
    
    console.log(a); // UnDefined
    var a = 7;
    console.log(x); // Not Defined

// Lesson 7

    Scope Chain
    ------------------------
    https://www.youtube.com/watch?v=uH-tVP8MUs8&t=1130s

    function a() {
      c();
      function c() {
        console.log(b); // accessing b from global
      }
    }
    var b = 10;
    a();                // function call happens after b is assigned value

// Lesson 8

    Let vs Const
    ------------------------
    https://www.youtube.com/watch?v=BNC6slYCj50&t=1243s

    a)
    console.log(b); // undefined

    b)
    temporal dead zone, you cant access until initialized, though declared in zone
    console.log(a); // unable to access 'a' before initialization - Uncaught ReferenceError

    c)
    // undeclared
    console.log(x); // x is not defined - Uncaught ReferenceError

    let a = 10;     // memory allocated under - script
    var b = 100;    // memory allocated under - global

    d)
    // let is strict

    let a = 100;    // Uncaught SyntaxError: Identifier 'a' has already been declared
    var a = 100;    // Uncaught SyntaxError: Identifier 'a' has already been declared

    e)
    // const is even more strict than let
    let c1 = 1;
    c1 = 10;
    console.log(c1); // works fine for let

    let c2;
    c2 = 10;
    console.log(c2); // works fine for let

    f)
    const c21;       // 'const' declarations must be initialized.
    c21 = 100;       // Uncaught SyntaxError: Missing initializer in const declaration

    const c3 = 100;
    c3 = 1000;       // Uncaught TypeError: Assignment to constant variable