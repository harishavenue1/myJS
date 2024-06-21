// 1
function x() {
    var a = 7;
    function y() {
        console.log("#1 " + a);
    }
    y();
}
x();                        // 7

// 2
function x() {
    var a = 7;
    function y() {
        console.log("#2 " + a);
    }
    return y;
}

var z = x();
z();                        // 7

// 3
function x() {
    var a = 7;
    return function y() {
        console.log("#3 " + a);
    }
}

var z = x();
z();                        // 7


// 4
function x() {
    var a = 7;
    function y() {
        console.log("#4 " + a);
    }
    a = 100;
    return y;
}

var z = x();
z();                        // 100

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log("#5 " + a + ", " + b);      // 7, 900
        }
        y();
    }
    x();
}
z();

// ---- (VAR) - Cloures Interview Qn - Same Copy of i
function x1() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JS!");
}
// x1();

// output is below due to closures (let)
// 6
// 6
// 6
// 6
// 6

// ---- (let) - Cloures Interview Qn - BLOCK SCOPE - New Copy of i
function x2() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JS!");
}
// x2();

// output is below due to closures (var)
// 1
// 2
// 3
// 4
// 5

// ---- (VAR) - Cloures Interview Qn - LOGIC ADDED for New Copy of i
function x3() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i); // here we pass new value of i
    }
    console.log("Namaste JS!");
}
x3();

// output is below due to closures (let)
// 1
// 2
// 3
// 4
// 5