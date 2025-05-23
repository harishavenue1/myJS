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

// Lesson 9

    Block Scoped
    ------------
    https://www.youtube.com/watch?v=lW_erSjyMeM&t=1160s

    i)
    {
        // block
        // variables here are under block scoped (b & c)

        var a = 10;     // global scoped
        let b = 20;
        const c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }

    console.log(a); // 10
    console.log(b); // Reference Error: b is not defined
    console.log(c);

    ii)
    Shadow variable - var

    var a = 100;
    {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(a); // 10
    }
    console.log(a);     // 10

    iii)
    Shadow variable - let & const

    let b = 100;
    const c = 200;
    {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(b); // 20
        console.log(c); // 30
    }
    console.log(b);     // 100
    console.log(c);     // 200

    iv)
    illegal shadowing

    let a = 20;
    {
        var a = 10;     // Syntax Error: Identifier 'a' has already been declared
    }

    iv)
    legal shadowing

    let a = 20;
    {
        let a = 10;     
    }

    iv)
    legal shadowing

    var a = 20;
    {
        let a = 10;     
    }

// Lesson 10

    Closures
    ------------
    https://www.youtube.com/watch?v=qikxEIxsXco&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=12

    A closure is a combination of a function bundled together with refs to its 
    surrounding state.

    // 1
    function x() {
        var a = 7;
        function y() {
            console.log(a);
        }
        y();
    }
    x();                        // 7

    // 2
    function x() {
        var a = 7;
        function y() {
            console.log(a);
        }
        return y;
    }

    var z = x();
    z();                        // 7 

// Lesson 11

    Functions
    ---------

    Function Statement or Function Declaration
    ------------------------------------------

        function a () {

        }

    Function Expression
    ------------------------------------------

        var b = function () {

        }

    Anonymous Function
    ------------------------------------------

        function () {
            console.log("b called");
        }

    Named Function Expression
    ------------------------------------------

        var b1 = function abc() {
            console.log("b1 called");
        }
        b1();

    Difference between Parameters and Arguments
    ------------------------------------------

        var b2 = function (param1, param2) { // this is parameters
            console.log("b2 called");
        }
        b2(1, 2); // this is arguments

    First Class Functions
    ------------------------------------------

        var b3 = function (param1) {    // received params as functions
            return function xyz() {     // return functions

            }
        }
        function fn() {

        }
        console.log(b3(fn));            // sending functions as arguments

    Arrow Functions
    ------------------------------------------
        an = () => {

        }

// Lesson 12

    What is Callback Function
    -------------------------

        setTimeout(function () {        // async timeout
            console.log("timed out!")
        }, 5000);

    Blocking the main thread
    Power of Callbacks
    Deep about Event Listeners
    Closures with Event Listeners
    Scope with Event listeners
    --------------------------
        function attachEventListeners() {
            let count = 0;
            document.getElementById("clickMe").addEventListener("click", function xyz() {
                console.log("button clicked ", ++count); // closure
            });
        }
        attachEventListeners();

    GC and remove Event listeners
    -----------------------------
    why need to remove event listeners
    Eventlisteners are heavy, as it takes more memory, due to closures, even if call stack is empty
    so need logic to remove eventListeners with GC

// Lesson EventLOOP

    CallStack <- EventLoop <- Callback Queue <- Timer

    // priorityTask (all triggered by promises and mutations)
    CallStack <- EventLoop <- MicroTask Queue <- Timer

    console.log('start');

    setTimeout(function cb () {
        console.log('timeout');
    },5000);

    console.log('end');

    // here, as we run, global context starts, with printing start, then setTimeout func is read and moved to timer,
    // then it prints end and finally global context task is over and is out of call stack
    // but when timer is over, callback function needs to print('timeout'), but there is no global context running,
    // so here comes the callback queue with eventloop
    // eventloop keeps checking on callback queue if any arised out of timeout events,
    // once callback queue is inserted with any task, eventLoop moves it to CallStack to run and hence process completes.

// Lesson JS-Engine [JRE]

    V8 - Chrome [Fasted]
    Chakra - Edge
    SpiderMonkey - Firefox

    Steps -> Parsing -> Compilation -> Execution

    Parsing
    -------
    JS Engine, converts code to Tokens via AST [Abstract Syntax Tree]

    Interpreter vs Compiler
    ----------------------
    Interpreter
        Executes line by line, without knowing what is in next line
        Faster Run, as there is no need to compile
    
    Compiler
        Compiles all lines before in hand, convert to optimized code size, to execute faster
        Performance wise better as Code is Optimized for Run

    JS Engine - Interpreter + Compiler - Modern Tech

    Compiler
        Compiles Code and moves byteCode to Execution Phase

    Execution
        Starts the Memory Heap
        Starts the Call Stack with Global Execution Context - with tasks added in LIFO
        Garbage Collections also begins to clear memory once any variable is unused in Memory Heap

// Lesson - Trust Issues with setTimeout

    SetTimeOut method may not execute with timeSec given, due to call stack.
    As the eventLoop cant push task from call back queue to call stack, as the GEC is still executing the main lines of code.
    So only after GEC is done, event loop pushed the task from call back queue to call stack, only then setTimeOut lines work.
    So the delay.

// Lesson - Higher Order Function

    Function which takes another fn as an argument or returns fn is Higher order Function.

// Lesson - Promise

    The way of handing the callback fn only when the state is fullfiled
    using then() after an async operation.

    This was no trust issues and no inversion of control.

    This way a fn will be called for sure.

    "Promise is an object which promises eventual completion of a callback fn post an async operation"

    Promise is immutable, trustable

    2 parts of promise, state and result.

// Lesson - Async Await

    Async function always returns a Promise.

    If return value is not a promise object, then function wraps in promise object.

    Async Await -- Used to handle promises.

    Await - can be used only in async function.

    Old way to handle promise - then
    New way to handle promise - await

    Old way to handle promise - then
    Js Engine doesn wait for callback in then method to resolve

    New way to handle promise - await
    Js Engine will wait (via callStack) for promise to resolve with await keyword

    If P1 is resolved in 10s and P2 in 5s, then P2 needs to wait P1 to complete to print result.
    Prints P1 and P2 together, as P2 is already resolved during P1 phase and was waiting for P1.

    Operation
        CallStack gets handlePromise (name of method) having P1 and P2 to resolve.
        Since P1 takes 10s, the method handlePromise, gets suspended till then.
        And Call stack continues the main thread operation.
        When 10s is over, handlePromise method is taken back to callStack and resumes operation.
        Since 10s is over, at same P2 is also resolved, though control hasnt gone to that line.
        So P1 and P2 output is printed at same time.


// Lesson - Types of Promises

    Input is iterable promises or Array of Promises.

    Promise.all()           
        -> All Should Resolve so waiting till last, or if any Rejects, Error is Thrown.
        -> Fail Fast

    Promise.allSetteled()   
        -> Even if any rejects, it will still wait for All to Complete.

    Promise.race()
        -> Seeking for 1st success of 1st failure.
        -> Which ever promises resolves first, its value is returned.
        -> If 1st promise rejects, error will be thrown.

    Promise.any()
        -> Seeking for 1st success.
        -> Will wait for 1st promise to get successful.
        -> Unlike race(), if 1st promise, instead of error, it will wait for next promise to resolve. Error will be ignored.
        -> If all fails, then return value will be aggregrated error of all promises.